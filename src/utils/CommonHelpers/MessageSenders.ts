import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';
import * as ReplyConstants from './ReplyConstants';

export async function sendError(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.ERROR_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_RESTART_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendLoading(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.LOADING_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.DEFAULT_SAFETY_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendSafety(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.SAFETY_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.DEFAULT_SAFETY_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendWelcome(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.NEW_USER_WELCOME_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.NEW_USER_WELCOME_MESSAGE_BUTTON_START,
    button2: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendExistingUserWelcome(clientid: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: clientid,
    quickReply: true,
    msgBody: ReplyConstants.EXISTING_USER_WELCOME_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
    button2: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendHelp(cliendId: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.HELP_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_END_CHAT_BUTTON,
    button2: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendFAQ(cliendId: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.FAQ_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendUnsubscribed(cliendId: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.UNSUBSCRIBED_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
    button2: ReplyConstants.SYSTEM_PROMPTS_RESTART_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}

export async function sendChurnedUserWelcome(cliendId: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.CHURNED_USER_WELCOME_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SUBSCRIBE_BUTTON,
    button2: ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ,
  };
  await sendMessageToWhatsapp(payload);
}
