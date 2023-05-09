/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import { getFirestore } from 'firebase-admin/firestore';

import { saveEvent } from '../CommonHelpers/EventHelper';
import { sendTimedOutTemplateToAll } from './TimedOutHelpers';

async function updatePastMatches(doc: any, unmatchedClientId: string) {
  const pastMatches = doc.data()?.pastMatches || [];
  const updatedPastMatches = [...pastMatches, unmatchedClientId];
  await doc.ref.update({ pastMatches: updatedPastMatches });
}

export async function executeUnmatchTimedOutUsers() {
  const now = Date.now() / 1000;
  const oneDayInSecs = 24 * 60 * 60;
  const timeoutThreshold = now - oneDayInSecs;

  const matchedClientsQuery = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .where('currentMatchClientId', '!=', '');

  const matchedClientsSnapshot = await matchedClientsQuery.get();

  // Fetch only the matched clients whose expiration time has exceeded the timeout threshold
  const clientsToBeUnmatched = matchedClientsSnapshot.docs.filter((doc) => {
    return doc.data().expiration <= timeoutThreshold;
  });

  const unmatchedClients = new Set();

  // eslint-disable-next-line no-restricted-syntax
  for (const doc of clientsToBeUnmatched) {
    const clientId = doc.id;
    const { currentMatchClientId } = doc.data();

    // Avoid notifying the same clients twice
    if (
      !unmatchedClients.has(clientId) &&
      !unmatchedClients.has(currentMatchClientId)
    ) {
      console.log(`unmatching ${clientId} & ${currentMatchClientId}`);

      // Fetch the current client and their match
      const [currentClientDoc, matchClientDoc] = await Promise.all([
        doc.ref.get(),
        doc.ref.parent.doc(currentMatchClientId).get(),
      ]);

      // Update pastMatches for both clients
      await Promise.all([
        updatePastMatches(currentClientDoc, currentMatchClientId),
        updatePastMatches(matchClientDoc, clientId),
      ]);

      // Unmatch both clients
      await Promise.all([
        currentClientDoc.ref.update({ currentMatchClientId: '' }),
        matchClientDoc.ref.update({ currentMatchClientId: '' }),
      ]);

      // Send timed out template to both clients
      await sendTimedOutTemplateToAll(clientId, currentMatchClientId);
      unmatchedClients.add(clientId);
      unmatchedClients.add(currentMatchClientId);

      // Save the event
      await saveEvent(clientId, currentMatchClientId, 'TIMEDOUT');
    }
  }
  return true;
}
