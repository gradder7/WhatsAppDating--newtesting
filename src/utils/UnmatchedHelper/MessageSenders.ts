import {
  getAllUserFeilds,
  getUserField,
} from '../CommonHelpers/FirebaseHelper';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import { type PropsFormatted, sendMessageToWhatsapp } from '../WAMessageHelper';

export async function sendProfile(
  clientid: any,
  IdOfProfileToBeSent: string
): Promise<void> {
  const matchedClientFields = await getAllUserFeilds(IdOfProfileToBeSent);
  const { username, location, age, gender, bio } = matchedClientFields || {};
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: `Here's their bio ✨
~~~~~~~~~~~~~~~~~~~~~~~
Username: *${username || '?'}*
Location: *${location || '?'}*
Age: *${age || '?'}*
Gender: *${gender || '?'}*
Bio: *${bio || '?'}*
~~~~~~~~~~~~~~~~~~~~~~~
Anything you type will be sent to them. `,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_END_CHAT_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendMatchedMessageToSelf(
  clientid: any,
  matchedClientId: string
): Promise<void> {
  const matchedClientFields = await getAllUserFeilds(matchedClientId);
  const { username, location, age, gender, bio } = matchedClientFields || {};
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: `Here's their bio ✨
~~~~~~~~~~~~~~~~~~~~~~~
Username: *${username || '?'}*
Location: *${location || '?'}*
Age: *${age || '?'}*
Gender: *${gender || '?'}*
Bio: *${bio || '?'}*
~~~~~~~~~~~~~~~~~~~~~~~
Anything you type will be sent to them. `,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_END_CHAT_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendMatchedMessageToOther(
  clientid: any,
  matchedClientId: string
): Promise<void> {
  // Nice matched notification message, since template unsupported by WA
  const clientFields = await getAllUserFeilds(clientid);
  const { username, location, age, gender, bio } = clientFields || {};
  const payload: PropsFormatted = {
    phoneNumber: matchedClientId,
    quickReply: true,
    msgBody: `Here's their bio ✨
~~~~~~~~~~~~~~~~~~~~~~~
Username: *${username || '?'}*
Location: *${location || '?'}*
Age: *${age || '?'}*
Gender: *${gender || '?'}*
Bio: *${bio || '?'}*
~~~~~~~~~~~~~~~~~~~~~~~
Anything you type will be sent to them. `,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_END_CHAT_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendUpdateToOther(
  clientid: any,
  matchedClientId: string,
  update: string
): Promise<void> {
  // TODO: update properly after template approved
  const username = await getUserField(ReplyConstants.USERNAME, clientid);
  const matchedUsername = await getUserField(
    ReplyConstants.USERNAME,
    matchedClientId
  );

  const payloadMatchedClient: PropsFormatted = {
    phoneNumber: matchedClientId,
    template: true,
    templateName: 'wadate_dev_match_notification',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${matchedUsername}*`,
    variable2: `*${username}* - ${update}`,
  };
  await sendMessageToWhatsapp(payloadMatchedClient);
}

export async function sendUpdateToAll(
  clientid: any,
  matchedClientId: string,
  update: string
): Promise<void> {
  // TODO: update properly after template approved
  const username = await getUserField(ReplyConstants.USERNAME, clientid);
  const matchedUsername = await getUserField(
    ReplyConstants.USERNAME,
    matchedClientId
  );

  const payloadMatchedClient: PropsFormatted = {
    phoneNumber: matchedClientId,
    template: true,
    templateName: 'wadate_dev_match_notification',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${matchedUsername}*`,
    variable2: `*${username}* - ${update}`,
  };
  await sendMessageToWhatsapp(payloadMatchedClient);

  const payloadClient: PropsFormatted = {
    phoneNumber: clientid,
    template: true,
    templateName: 'wadate_dev_match_notification',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${username}*`,
    variable2: `*${matchedUsername}* - ${update}`,
  };
  await sendMessageToWhatsapp(payloadClient);
}

export async function sendNewUpdate(
  clientid: any,
  update: string
): Promise<void> {
  const username = await getUserField(ReplyConstants.USERNAME, clientid);

  const payloadClient: PropsFormatted = {
    phoneNumber: clientid,
    template: true,
    templateName: 'fate_notification',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${username}*`,
    variable2: `*${update}*`,
  };
  await sendMessageToWhatsapp(payloadClient);
}

export async function sendWillBeMatched(clientId: string) {
  const payload: PropsFormatted = {
    phoneNumber: clientId,
    quickReply: true,
    msgBody: ReplyConstants.WILL_BE_MATCHED_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };

  await sendMessageToWhatsapp(payload);
}
