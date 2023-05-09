/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';

import * as ReplyConstants from '../CommonHelpers/ReplyConstants';

export async function getMatch(clientId: string): Promise<string | null> {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(clientId);
  const clientData = (await clientDoc.get()).data();
  console.log(`${clientData?.name} looking for match`);
  if (!clientData) {
    console.log('no client data');
    return null;
  }
  const inputGender = clientData.gender;
  const inputLocation = clientData.location;

  const oppositeGender =
    inputGender === ReplyConstants.SYSTEM_PROMPTS_GENDER_MALE
      ? ReplyConstants.SYSTEM_PROMPTS_GENDER_FEMALE
      : ReplyConstants.SYSTEM_PROMPTS_GENDER_MALE;

  const clientPastMatches = clientData.pastMatches || []; // Retrieve the "pastMatches" array for the given clientId

  let oppositeGenderClients;
  if (oppositeGender === ReplyConstants.SYSTEM_PROMPTS_GENDER_FEMALE) {
    oppositeGenderClients = await getFirestore()
      .collection('apps')
      .doc(process.env.WABA_ID as string)
      .collection('clients')
      .where(ReplyConstants.USERNAME, '!=', '')
      .where(ReplyConstants.GENDER, '==', oppositeGender)
      .where(ReplyConstants.LOCATION, '==', inputLocation)
      .where(ReplyConstants.CURRENT_MATCH_CLIENT_ID, '==', '')
      .where(ReplyConstants.SUBSCRIPTION_STATUS, '==', true)
      .get();
  } else {
    oppositeGenderClients = await getFirestore()
      .collection('apps')
      .doc(process.env.WABA_ID as string)
      .collection('clients')
      // .where(ReplyConstants.USERNAME, '!=', '') // since firebase doesn't support multiple != clauses
      .where(ReplyConstants.GENDER, '==', oppositeGender)
      .where(ReplyConstants.LOCATION, '==', inputLocation)
      .where(ReplyConstants.BIO, '!=', '')
      .where(ReplyConstants.CURRENT_MATCH_CLIENT_ID, '==', '')
      .where(ReplyConstants.SUBSCRIPTION_STATUS, '==', true)
      .get();
  }

  const oppositeGenderClientIds = oppositeGenderClients.docs.map(
    (doc) => doc.id
  );

  const filteredIds = oppositeGenderClientIds.filter(
    (id) => id !== clientId && !clientPastMatches.includes(id)
  ); // Exclude clientId and client's pastMatches from the filteredIds array

  if (filteredIds.length === 0) {
    return null;
  }

  // Check if any potential match has "lookingForMatchSince" field
  const potentialMatches = await Promise.all(
    filteredIds.map(async (id) => {
      const doc = await getFirestore()
        .collection('apps')
        .doc(process.env.WABA_ID as string)
        .collection('clients')
        .doc(id)
        .get();
      return {
        clientId: id,
        lookingForMatchSince: doc.data()?.lookingForMatchSince,
      };
    })
  );

  const matchWithLookingForMatchSince = potentialMatches.find(
    (match) =>
      match.lookingForMatchSince !== undefined &&
      match.lookingForMatchSince !== null
  );

  if (matchWithLookingForMatchSince) {
    // If a potential match has "lookingForMatchSince" field, sort the array by "lookingForMatchSince" in ascending order and return the clientId with the lowest value
    potentialMatches.sort(
      (a, b) => (b.lookingForMatchSince || 0) - (a.lookingForMatchSince || 0)
    );
    return potentialMatches[0]?.clientId || null;
  }
  // If none of the potential matches have "lookingForMatchSince" field, return a random clientId from the filteredIds array
  const randomIndex = Math.floor(Math.random() * filteredIds.length);
  return filteredIds[randomIndex] || null;
}
