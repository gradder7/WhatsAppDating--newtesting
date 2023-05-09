/* eslint-disable no-await-in-loop */
import { getFirestore } from 'firebase-admin/firestore';

import { saveEvent } from '../CommonHelpers/EventHelper';
import { sendNewUpdate, sendProfile } from '../UnmatchedHelper/MessageSenders';
import { getCronMatch } from './MatchHelper';

async function updateCurrentMatches(doc: any, matchedClientId: string) {
  await doc.ref.update(
    {
      currentMatchClientId: matchedClientId,
      lookingForMatchSince: '',
    },
    { merge: true }
  );
}

function delay(time: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function executeMatchTimedOutUsers() {
  const matchedClients = new Set(); // to keep track of already matched clients
  const unmatchedClientsQuery = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .where('fieldsCompleted', '==', true)
    .where('currentMatchClientId', '==', '')
    .orderBy('expiration', 'desc');
  const unmatchedClientsSnapshot = await unmatchedClientsQuery.get();

  // Checking if composite query needs to be built
  // eslint-disable-next-line no-console
  console.log('unmatchedClientsSnapshot', unmatchedClientsSnapshot);

  // eslint-disable-next-line no-restricted-syntax
  for (const doc of unmatchedClientsSnapshot.docs) {
    const clientId = doc.id;
    if (!matchedClients.has(clientId)) {
      const match = await getCronMatch(clientId);
      if (match) {
        // eslint-disable-next-line no-console
        console.log(`matching ${clientId} with ${match}`);

        // Fetch the docs of current client and their match
        const [currentClientDoc, matchClientDoc] = await Promise.all([
          doc.ref.get(),
          doc.ref.parent.doc(match).get(),
        ]);

        // Update currentMatchClientId & lookingForMatchSince for both clients
        await Promise.all([
          updateCurrentMatches(currentClientDoc, match),
          updateCurrentMatches(matchClientDoc, clientId),
        ]);

        // Send new match & profile message to both clients
        await Promise.all([
          sendNewUpdate(clientId, 'new match'),
          sendNewUpdate(match, 'new match'),
        ]);
        delay(5000);
        await Promise.all([
          sendProfile(clientId, match),
          sendProfile(match, clientId),
        ]);

        // Add both clients to matchedClients set
        matchedClients.add(clientId);
        matchedClients.add(match);

        // Save event
        await saveEvent(clientId, match, 'MATCHED');
      }
    }
  }
}
