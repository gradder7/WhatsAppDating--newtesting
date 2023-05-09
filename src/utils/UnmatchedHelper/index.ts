/* eslint-disable no-console */

import {
  setLatestMessage,
  updateUserField,
} from '../CommonHelpers/FirebaseHelper';
import {
  isMessageLatest,
  isMessageValid,
  isMessageWelcome,
} from '../CommonHelpers/MessageCheckers';
import { extractText } from '../CommonHelpers/MessageParsers';
import {
  sendExistingUserWelcome,
  sendLoading,
  sendWelcome,
} from '../CommonHelpers/MessageSenders';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import { saveMsgObjToClientDocsDB } from '../MessageSavers';
import { getMatch } from '../NewUserHelper/FirebaseHelper';
import { upsertMatchInDBandNotifyCouple } from './MatchHelper';
import { sendWillBeMatched } from './MessageSenders';

// eslint-disable-next-line consistent-return
export async function replyToUnmatchedUser(messageObject: any) {
  await saveMsgObjToClientDocsDB(messageObject);
  // Check msg validity
  const msgValid = await isMessageValid(messageObject);
  if (msgValid) {
    const message = extractText(messageObject);

    const { clientid } = messageObject;
    // Check if prompt is latest
    const msgIsLatest = await isMessageLatest(clientid, message);
    // eslint-disable-next-line no-console
    console.log('Is Msg Latest? ', msgIsLatest);
    await setLatestMessage(clientid, ReplyConstants.SYSTEM_PROMPTS_RESTART);

    // Set Latest Message
    if (msgIsLatest) {
      await setLatestMessage(clientid, message);

      const lowercaseMessage = message.toLowerCase().trim();
      console.log('lowercaseMessage: ', lowercaseMessage);
      // const firstWord = await getFirstWord(lowercaseMessage);

      const msgIsWelcome = await isMessageWelcome(message);
      let matchedClientId;
      switch (true) {
        case msgIsWelcome ||
          !ReplyConstants.SYSTEM_PROMPTS.includes(lowercaseMessage):
          console.log('Trigger: Existing User Welcome Message');
          return sendExistingUserWelcome(clientid);

        // Execute Match and Notify Matched Users - Post match is handled in facilitateConversation function
        case [
          ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
          ReplyConstants.NEW_USER_WELCOME_MESSAGE_BUTTON_START,
        ].includes(message):
          console.log('Trigger: Existing User Match');
          await updateUserField(
            ReplyConstants.LOOKING_FOR_MATCH_SINCE,
            Date.now(),
            clientid
          );
          // Match with Unmatched Client ID
          await sendLoading(clientid);
          matchedClientId = (await getMatch(clientid)) ?? 'na';
          if (matchedClientId === 'na') {
            await sendWillBeMatched(clientid);
          } else {
            await upsertMatchInDBandNotifyCouple(clientid, matchedClientId);
          }
          break;
        default:
          console.log('Trigger: Unmatched User Default Case');
          return sendWelcome(clientid);
      }
    }

    console.log('reached end of replyToUnmatchedUser');
  }
}
