/* eslint-disable no-console */
import { saveEvent } from '../CommonHelpers/EventHelper';
import { getUserField, updateUserField } from '../CommonHelpers/FirebaseHelper';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import { getFieldAndMatch } from '../UnmatchedHelper/MatchHelper';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';
import { updatePastMatchesBothUsers } from './FirebaseHelper';

export async function sendNewUnmatch(clientid: any): Promise<void> {
  const username = await getUserField(ReplyConstants.USERNAME, clientid);

  // Nofity unmatched to other user
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    template: true,
    templateName: 'fate_notification_unmatch',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${username}*`,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendUnMatchedToSelf(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: `You've been unmatched with your current match. 😮‍💨
Tap the below button to start matching again. 🤩`,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

async function sendUnmatchedMessage(cliendId: string) {
  // Nice unmatched notification message, since template unsupported by WA
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.UNMATCH_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
    button2: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendUnmatchedToOther(
  clientid: any,
  matchedClientId: string
): Promise<void> {
  const username = await getUserField(ReplyConstants.USERNAME, clientid);

  const matchedUsername = await getUserField(
    ReplyConstants.USERNAME,
    matchedClientId
  );

  // Nofity unmatched to other user
  const payload: PropsFormatted = {
    phoneNumber: matchedClientId,
    template: true,
    templateName: 'wadate_dev_match_notification',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${matchedUsername}*`,
    variable2: `*${username}* - Unmatched`,
  };
  await sendMessageToWhatsapp(payload);

  // Send Existing User Welcome Message
  await sendUnmatchedMessage(matchedClientId);
}

export async function clearMatchInDBforBothUsers(
  clientid: any,
  matchedClientId: any
) {
  console.log('update past matches');
  // Add to past matches
  await updatePastMatchesBothUsers(clientid, matchedClientId);

  // Update Matched Client ID of Current Client
  await updateUserField(ReplyConstants.CURRENT_MATCH_CLIENT_ID, '', clientid);

  // Update Matched Client ID of Matched Client
  await updateUserField(
    ReplyConstants.CURRENT_MATCH_CLIENT_ID,
    '',
    matchedClientId
  );

  // Update matched status in Conversations DB
  // await clearMatchConversationsDB(clientid, matchedClientId);
}

export async function clearDBandNotifyEndMatchToCouple(
  clientid: string,
  matchedClientId: string
) {
  console.log('Trigger: End Chat');

  console.log('sendUnMatchedToSelf');
  await sendUnMatchedToSelf(clientid);

  console.log('sendUnmatchedToOther');
  await sendUnmatchedToOther(clientid, matchedClientId);

  console.log('clearMatchInDBforBothUsers');
  await clearMatchInDBforBothUsers(clientid, matchedClientId);

  await saveEvent(clientid, matchedClientId, 'UNMATCHED');

  // Match them with users looking for a match
  await Promise.all([
    getFieldAndMatch(clientid),
    getFieldAndMatch(matchedClientId),
  ]);
}
