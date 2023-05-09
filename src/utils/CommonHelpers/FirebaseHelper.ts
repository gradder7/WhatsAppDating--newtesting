/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';

export async function setLatestMessage(
  clientid: any,
  message: any
): Promise<void> {
  const now = Date.now() / 1000;
  const wabaId = process.env.WABA_ID;
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(wabaId as string)
    .collection('clients')
    .doc(clientid);
  const updates: any = { latestmsg: message, latestmsgTime: now };
  await clientDoc.set(updates, { merge: true });
}

export async function getContextMsgBody(
  clientid: any,
  messageObject: any
): Promise<any> {
  const wabaId = process.env.WABA_ID;
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(wabaId as string)
    .collection('clients')
    .doc(clientid)
    .collection('messages');

  // await to get message body using message id from firebase db
  const querySnapshot = await clientDoc
    .where('message.id', '==', messageObject?.message.context?.id)
    .get();
  // console.log(
  //   'querySnapshot docs data',
  //   JSON.stringify(querySnapshot.docs[0]?.data(), null, 2)
  // );
  const contextMsg =
    querySnapshot.docs[0]?.data().message?.interactive?.body?.text;
  // console.log('contextMsg', contextMsg);
  return contextMsg;
}

export async function isNewUser(clientid: any): Promise<boolean> {
  const wabaId = process.env.WABA_ID;
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(wabaId as string)
    .collection('clients')
    .doc(clientid);
  const username = await (await clientDoc.get()).data()?.username;
  const gender = await (await clientDoc.get()).data()?.gender;
  if (username && gender) {
    // eslint-disable-next-line no-console
    console.log(`username in db: ${username}
gender in db: ${gender}`);
    return false;
  }
  return true;
}

export async function updateUserField(
  field: string,
  value: any,
  clientId: any
) {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(clientId);

  console.log(
    `attempt: update client ${clientId} field ${field} with value ${value} `
  );
  // make updates to the profile
  const updates: any = {};
  updates[field] = value;
  updates.lastupdatedat = Date.now();
  await clientDoc.set(updates, { merge: true });
}

export async function getAllUserFeilds(cliendId: string) {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(cliendId);
  const data = (await clientDoc.get()).data();
  return data;
}

export async function getUserField(
  field: string,
  cliendId: any
): Promise<string> {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(cliendId);
  const data = (await clientDoc.get()).data();
  return data ? data[field] : null;
}

export async function getMsgRelayId(
  clientid: string,
  matchedClientId: string,
  fromUserMsgID: string
): Promise<string> {
  const wabaId = process.env.WABA_ID;

  const [clientA, clientB] = [clientid, matchedClientId].sort();

  const conversationsDoc = getFirestore()
    .collection('apps')
    .doc(wabaId as string)
    .collection('conversations')
    .doc(`${clientA}_${clientB}`)
    .collection('messages');

  let querySnapshot = await conversationsDoc
    .where('metadata.to_client_msg_id', '==', fromUserMsgID)
    .get();

  let msgRelayId = querySnapshot.docs[0]?.data().metadata.from_client_msg_id;

  // Handle self reactions

  if (querySnapshot.docs.length === 0 || !querySnapshot.docs[0]?.data()) {
    querySnapshot = await conversationsDoc
      .where('metadata.from_client_msg_id', '==', fromUserMsgID)
      .get();
    msgRelayId = querySnapshot.docs[0]?.data().metadata.to_client_msg_id;
  }

  return msgRelayId;
}
