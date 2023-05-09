import { firestore } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

import { extractText } from './CommonHelpers/MessageParsers';

function createMessagePayload(
  data: any,
  res: any,
  fromUserID?: string,
  fromUserMsgID?: string
) {
  const timestamp = Date.now();
  // eslint-disable-next-line consistent-return
  return {
    timestamp,
    type: data.type,
    metadata: {
      from_client: fromUserID || process.env.PHONE_NUMBER,
      from_client_msg_id: fromUserMsgID || null,
      to_client: data.to,
      to_client_msg_id: res.data.messages[0].id,
    },
    // outgoing message
    message: {
      ...data,
    },
  };
}

export async function saveToConversationsDB(
  data: any,
  res: any,
  fromUserID?: string,
  fromUserMsgID?: string
) {
  const messageObject: any = createMessagePayload(
    data,
    res,
    fromUserID,
    fromUserMsgID
  );

  const [clientA, clientB] = [
    messageObject.metadata.to_client,
    messageObject.metadata.from_client,
  ].sort();

  // const randomNumber = Math.floor(Math.random() * 100000);

  const conversationsDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('conversations')
    .doc(`${clientA}_${clientB}`);
  await conversationsDoc.collection('messages').add(messageObject);

  const message = extractText(messageObject);

  // update latest message
  await conversationsDoc.set(
    {
      lastupdatedat: messageObject.timestamp,
      numberOfMsgs: firestore.FieldValue.increment(1),
      latest_message: message || null,
      matchStatus: true,
    },
    { merge: true }
  );
}

export async function clearMatchConversationsDB(
  clientA: string,
  clientB: string
) {
  const conversationsDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('conversations')
    .doc(`${clientA}_${clientB}`);
  await conversationsDoc.set(
    {
      matchStatus: false,
    },
    { merge: true }
  );
}

export async function saveToClientDocsDB(data: any, res: any) {
  const messageObject: any = createMessagePayload(data, res);

  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(messageObject.metadata.to_client);
  await clientDoc.collection('sysmessages').add(messageObject);
}

export async function saveMsgObjToClientDocsDB(messageObject: any) {
  const clientDoc = getFirestore()
    .collection('apps')
    .doc(process.env.WABA_ID as string)
    .collection('clients')
    .doc(messageObject.message.from);
  await clientDoc.collection('sysmessages').add(messageObject);
}

// const sample = {
//   message: {
//     messaging_product: 'whatsapp',
//     recipient_type: 'individual',
//     text: {
//       body: 'Woohoo',
//       preview_url: false,
//     },
//     to: '971562457525',
//     type: 'text',
//     metadata: {
//       from_client: '918754535859',
//       from_client_msg_id:
//         'wamid.HBgMOTE4NzU0NTM1ODU5FQIAEhgUM0FFN0YzRjNFNEE1Q0U5OUZBMjUA',
//       to_client: '971562457525',
//       to_client_msg_id:
//         'wamid.HBgMOTcxNTYyNDU3NTI1FQIAERgSMTJCMjdFMkU4RDFGRkNDMTYyAA==',
//     },
//     status_raw: 200,
//   },
// };
