import {
  clearMatchInDBforBothUsers,
  sendUnmatchedToOther,
} from '../MatchedHelper/UnmatchHelper';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';
import { saveEvent } from './EventHelper';
import { setLatestMessage, updateUserField } from './FirebaseHelper';
import { isMessageLatest } from './MessageCheckers';
import * as ReplyConstants from './ReplyConstants';

export async function clearUserProfile(clientId: any) {
  const fieldUpdates = [
    updateUserField(ReplyConstants.USERNAME, '', clientId),
    updateUserField(ReplyConstants.GENDER, '', clientId),
    updateUserField(ReplyConstants.LOCATION, '', clientId),
    updateUserField(ReplyConstants.BIO, '', clientId),
    updateUserField(ReplyConstants.AGE, '', clientId),
  ];

  // Perform updates concurrently using Promise.all
  await Promise.all(fieldUpdates);
}

export async function handleRestart(
  clientid: string,
  currentMatchClientId?: string
): Promise<void> {
  // Check if prompt is latest
  const msgIsLatest = await isMessageLatest(
    clientid,
    ReplyConstants.SYSTEM_PROMPTS_RESTART
  );
  // eslint-disable-next-line no-console
  console.log('Is Restart Latest? ', msgIsLatest);

  // Set Latest Message
  if (msgIsLatest) {
    await setLatestMessage(clientid, ReplyConstants.SYSTEM_PROMPTS_RESTART);

    // Clear User Profile
    await clearUserProfile(clientid);

    // Clear Match Data & Notify the ex-Match
    if (currentMatchClientId && currentMatchClientId !== '') {
      // Clear Match Data
      await clearMatchInDBforBothUsers(clientid, currentMatchClientId);
      await sendUnmatchedToOther(clientid, currentMatchClientId);
      // Save event
      await saveEvent(clientid, currentMatchClientId, 'RESTARTED');
    }

    const payload: PropsFormatted = {
      phoneNumber: clientid,
      quickReply: true,
      msgBody: `${ReplyConstants.EXISTING_USER_RESTARTED_MESSAGE}
${ReplyConstants.NEW_USER_WELCOME_MESSAGE}`,
      msgFooter: ReplyConstants.DEFAULT_FOOTER,
      button1: ReplyConstants.NEW_USER_WELCOME_MESSAGE_BUTTON_START,
    };
    await sendMessageToWhatsapp(payload);
  }
}
