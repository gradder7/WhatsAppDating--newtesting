import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';

export async function sendObtainAge(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    list: true,
    listButton: ReplyConstants.AGE_LIST_BUTTON,
    listTitle1: ReplyConstants.AGE_LIST_TITLE_1,
    listTitle2: ReplyConstants.AGE_LIST_TITLE_2,
    listTitle3: ReplyConstants.AGE_LIST_TITLE_3,
    listTitle4: ReplyConstants.AGE_LIST_TITLE_4,
    listTitle5: ReplyConstants.AGE_LIST_TITLE_5,
    msgBody: ReplyConstants.NEW_USER_AGE_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendObtainUsername(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.NEW_USER_USERNAME_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendAgeERROR(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    list: true,
    listButton: ReplyConstants.AGE_LIST_BUTTON,
    listTitle1: ReplyConstants.AGE_LIST_TITLE_1,
    listTitle2: ReplyConstants.AGE_LIST_TITLE_2,
    listTitle3: ReplyConstants.AGE_LIST_TITLE_3,
    listTitle4: ReplyConstants.AGE_LIST_TITLE_4,
    listTitle5: ReplyConstants.AGE_LIST_TITLE_5,
    msgBody: ReplyConstants.NEW_USER_AGE_ERROR_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendObtainGender(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.NEW_USER_GENDER_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_GENDER_FEMALE,
    button2: ReplyConstants.SYSTEM_PROMPTS_GENDER_MALE,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendGenderERROR(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.NEW_USER_GENDER_ERROR_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_GENDER_FEMALE,
    button2: ReplyConstants.SYSTEM_PROMPTS_GENDER_MALE,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendObtainLocation(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    list: true,
    msgBody: ReplyConstants.NEW_USER_LOCATION_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    listButton: ReplyConstants.LOCATION_BUTTON,
    listTitle1: ReplyConstants.LOCATION_DELHI,
    listTitle2: ReplyConstants.LOCATION_MUMBAI,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendLocationERROR(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    list: true,
    msgBody: ReplyConstants.NEW_USER_LOCATION_ERROR_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    listButton: ReplyConstants.LOCATION_BUTTON,
    listTitle1: ReplyConstants.LOCATION_DELHI,
    listTitle2: ReplyConstants.LOCATION_MUMBAI,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendObtainBio(clientid: any) {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.NEW_USER_BIO_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendProfileCreatedMessage(
  clientid: any,
  username: string,
  location: string,
  age: string,
  gender: string,
  bio: string
): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: `Alright, your profile is all set up! ✨
~~~~~~~~~~~~~~~~~~~~~~~
Username: *${username}*
Location: *${location}*
Age: *${age}*
Gender: *${gender}*
Bio: *${bio}*
~~~~~~~~~~~~~~~~~~~~~~~
If it's correct, tap the below button to start matching`,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
    button2: ReplyConstants.SYSTEM_PROMPTS_EDIT_PROFILE,
  };
  await sendMessageToWhatsapp(payload);
}
