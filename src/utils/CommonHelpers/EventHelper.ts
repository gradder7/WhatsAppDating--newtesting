/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';

import * as ReplyConstants from '@/utils/CommonHelpers/ReplyConstants';

async function createEventPayload(
  clientId: string,
  matchedClientId: string,
  event: string
) {
  const timestamp = Date.now();
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(clientId);
  const clientFields = (await clientDoc.get()).data();
  const clientGender = clientFields?.[ReplyConstants.GENDER];
  const clientLocation = clientFields?.[ReplyConstants.LOCATION];
  const clientPastMatches = clientFields?.[ReplyConstants.PAST_MATCHES];

  const matchedClientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(matchedClientId);
  const matchedClientFields = (await matchedClientDoc.get()).data();
  const matchedClientGender = matchedClientFields?.[ReplyConstants.GENDER];
  const matchedClientLocation = matchedClientFields?.[ReplyConstants.LOCATION];
  const matchedClientPastMatches =
    matchedClientFields?.[ReplyConstants.PAST_MATCHES];
  return {
    timestamp,
    event,
    clientId: {
      clientId,
      gender: clientGender,
      location: clientLocation,
      pastMatches: clientPastMatches,
    },
    matchedClientId: {
      matchedClientId,
      gender: matchedClientGender,
      location: matchedClientLocation,
      pastMatches: matchedClientPastMatches,
    },
  };
}

export async function saveEvent(
  cliendId: string,
  matchedClientId: string,
  event: string
) {
  const eventObject: any = await createEventPayload(
    cliendId,
    matchedClientId,
    event
  );

  // Remove undefined properties from eventObject
  const cleanedEventObject = JSON.parse(JSON.stringify(eventObject));

  console.log(
    `Saving event ${event} for client ${cliendId} and matched client ${matchedClientId}`
  );
  console.log('eventObject', JSON.stringify(cleanedEventObject, null, 2));

  const currentDate = new Date();
  const dateString = currentDate
    .toLocaleDateString('en-GB')
    .replace(/\//g, '-');

  const eventsDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('eventDates')
    .doc(dateString)
    .collection('events');
  console.log(`eventsDoc metrics ${process.env.WABA_ID} ${dateString}`);
  await eventsDoc.add(cleanedEventObject);
  console.log('save event firebase result');
}
