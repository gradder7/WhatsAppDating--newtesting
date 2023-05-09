/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';

export async function updatePastMatchesBothUsers(
  clientId: string,
  matchedClientId: string
) {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients');

  console.log(
    `attempt: update pastMatches for client ${clientId} and matched client ${matchedClientId}`
  );

  // Update pastMatches field for the first client
  const docSnapshot1 = await clientDoc.doc(clientId).get();
  if (docSnapshot1.exists) {
    const data = docSnapshot1.data();
    const pastMatches =
      data && data.pastMatches && Array.isArray(data.pastMatches)
        ? [...data.pastMatches, matchedClientId]
        : [matchedClientId]; // Create a new array with matchedClientId if pastMatches doesn't exist

    // Make updates to the profile
    const updates: any = {};
    updates.pastMatches = pastMatches;
    updates.lastupdatedat = Date.now();
    await clientDoc.doc(clientId).set(updates, { merge: true });
  }

  // Update pastMatches field for the matched client
  const docSnapshot2 = await clientDoc.doc(matchedClientId).get();
  if (docSnapshot2.exists) {
    const data = docSnapshot2.data();
    const pastMatches =
      data && data.pastMatches && Array.isArray(data.pastMatches)
        ? [...data.pastMatches, clientId]
        : [clientId]; // Create a new array with clientId if pastMatches doesn't exist

    // Make updates to the profile
    const updates: any = {};
    updates.pastMatches = pastMatches;
    updates.lastupdatedat = Date.now();
    await clientDoc.doc(matchedClientId).set(updates, { merge: true });
  }
}
