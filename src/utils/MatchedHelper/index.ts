/* eslint-disable no-console */
import {
  getMsgRelayId,
  getUserField,
  setLatestMessage,
} from '../CommonHelpers/FirebaseHelper';
import {
  isMessageBad,
  isMessageLatest,
  isMessageValid,
} from '../CommonHelpers/MessageCheckers';
import {
  extractText,
  formatToUserMsg,
  normalizeWAmsgID,
} from '../CommonHelpers/MessageParsers';
import { sendHelp, sendSafety } from '../CommonHelpers/MessageSenders';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import { sendUpdateToOther } from '../UnmatchedHelper/MessageSenders';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';
import { checkHelpWords } from './ModerationHelper';
import { clearDBandNotifyEndMatchToCouple } from './UnmatchHelper';

// eslint-disable-next-line consistent-return
export async function facilitateConversation(
  messageObject: any,
  matchedClientId: string
) {
  // Check msg validity
  const msgValid = await isMessageValid(messageObject);
  if (msgValid) {
    const fromUserID = messageObject.clientid;
    const fromUserMsgID = normalizeWAmsgID(
      messageObject.message?.id || messageObject.id
    );

    const { clientid }: { clientid: string } = messageObject;

    // Handle Images
    if (messageObject.message.type === 'image') {
      const payload: PropsFormatted = {
        phoneNumber: matchedClientId,
        image: true,
        imageID: messageObject.message?.image?.id,
        imageCaption: messageObject.message?.image?.caption,
      };
      console.log('Trigger: Conversation Image');
      await sendMessageToWhatsapp(payload, fromUserID, fromUserMsgID);
    }

    // Handle Reactions
    else if (messageObject.message.type === 'reaction') {
      // eslint-disable-next-line no-console
      console.log('Trigger: Conversation Reaction');
      const reactionMsgID = normalizeWAmsgID(
        messageObject.message?.reaction?.message_id
      );
      console.log('reactionMsgID: ', reactionMsgID);
      const msgRelayId = await getMsgRelayId(
        clientid,
        matchedClientId,
        reactionMsgID
      );
      if (msgRelayId) {
        const payload: PropsFormatted = {
          phoneNumber: matchedClientId,
          reaction: true,
          messageID: msgRelayId,
          reactionEmoji: messageObject.message?.reaction?.emoji,
        };
        await sendMessageToWhatsapp(payload, fromUserID, fromUserMsgID);
      }
    }

    // Handle Text
    else if (
      messageObject.message.type === 'text' ||
      messageObject.message.type === 'interactive'
    ) {
      console.log('Trigger: Conversation Text');
      const message = extractText(messageObject);

      const lowercaseMessage = message.toLowerCase().trim();
      // Check if prompt is latest
      const msgIsLatest = await isMessageLatest(clientid, message);
      // eslint-disable-next-line no-console
      console.log('Is MatchedHelper Latest? ', msgIsLatest);
      await setLatestMessage(clientid, ReplyConstants.SYSTEM_PROMPTS_RESTART);

      // Set Latest Message
      if (msgIsLatest) {
        await setLatestMessage(clientid, message);

        // End Chat
        switch (true) {
          // Safety
          case lowercaseMessage ===
            ReplyConstants.DEFAULT_SAFETY_BUTTON.toLowerCase():
            console.log('Trigger: Conversation Safety');
            await sendSafety(clientid);
            break;

          // End Chat, clear match data, and send end match msg to both users
          case ReplyConstants.SYSTEM_PROMPTS_ARRAY_END_CHAT.includes(
            lowercaseMessage
          ):
            console.log('Trigger: Conversation End Chat');
            await clearDBandNotifyEndMatchToCouple(clientid, matchedClientId);
            return;

          // Send help message if user sends distress message
          case checkHelpWords(lowercaseMessage):
            console.log('Trigger: Conversation Help');
            await sendHelp(clientid);
            break;

          // Send help message to matched user if user sends bad words
          case isMessageBad(lowercaseMessage):
            console.log('Trigger: Conversation Bad Words');
            await sendHelp(matchedClientId);
            break;

          default:
            break;
        }

        // Relay Text to matched user
        if (
          ![
            ReplyConstants.SYSTEM_PROMPTS_RESTART.toLowerCase(),
            ReplyConstants.SYSTEM_PROMPTS_RESTART_BUTTON.toLowerCase(),
          ].includes(lowercaseMessage)
        ) {
          console.log('Trigger: Conversation Relay Text');

          const expiration = parseInt(
            await getUserField(ReplyConstants.EXPIRATION, matchedClientId),
            10
          );
          if (expiration && Date.now() / 1000 > expiration) {
            console.log(
              'Trigger: Conversation Expired, Sending Notification Template'
            );
            await sendUpdateToOther(clientid, matchedClientId, 'NEW MESSAGE');
          }
          const username = await getUserField(
            ReplyConstants.USERNAME,
            clientid
          );
          const formattedUserMsg = formatToUserMsg(message, username);
          // eslint-disable-next-line no-console
          const payload: PropsFormatted = {
            phoneNumber: matchedClientId,
            text: true,
            msgBody: formattedUserMsg,
          };
          await sendMessageToWhatsapp(payload, fromUserID, fromUserMsgID);
        }
      }
    }
  }
}
