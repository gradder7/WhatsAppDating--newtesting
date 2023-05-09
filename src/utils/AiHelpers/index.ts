import * as ReplyConstants from '@/utils/CommonHelpers/ReplyConstants';

import { setLatestMessage } from '../CommonHelpers/FirebaseHelper';
import {
  isMessageBad,
  isMessageLatest,
  isMessageValid,
} from '../CommonHelpers/MessageCheckers';
import { extractText } from '../CommonHelpers/MessageParsers';
import { clearDBandNotifyEndMatchToCouple } from '../MatchedHelper/UnmatchHelper';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';
import { composeChatPrompt, getChatGPT, saveChat } from './OpenAIHelper';

// eslint-disable-next-line consistent-return
export async function aiReplyToUser(messageObject: any) {
  // Check msg validity
  const msgValid = await isMessageValid(messageObject);
  if (msgValid) {
    const message = extractText(messageObject);
    const lowercaseMessage = message.toLowerCase().trim();
    const { clientid }: { clientid: string } = messageObject;

    // Check if prompt is latest
    const msgIsLatest = await isMessageLatest(clientid, message);
    // eslint-disable-next-line no-console
    console.log('msgIsLatest', msgIsLatest);
    if (msgIsLatest) {
      // Infer msg is a prompt msg
      await setLatestMessage(clientid, message);

      // Check if message contains bad words
      const msgIsBad = isMessageBad(message);
      if (!msgIsBad) {
        // Handle end chat
        if (
          ReplyConstants.SYSTEM_PROMPTS_ARRAY_END_CHAT.includes(
            lowercaseMessage
          )
        ) {
          // eslint-disable-next-line no-console
          console.log('Trigger Fate: End Chat');
          await clearDBandNotifyEndMatchToCouple(clientid, 'ai');
          return;
        }

        const promptChat = await composeChatPrompt(message, clientid);

        // generate prompt output
        const outputMessage = await getChatGPT(clientid, promptChat);
        if (outputMessage?.content?.trim()) {
          const payload: PropsFormatted = {
            phoneNumber: clientid,
            text: true,
            msgBody: outputMessage?.content?.trim(),
          };
          await sendMessageToWhatsapp(payload, 'ai', 'ai');
          await saveChat(promptChat, outputMessage, clientid);
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Bad Words Detected');
        const payload: PropsFormatted = {
          phoneNumber: clientid,
          text: true,
          msgBody: 'wtf.. bye!',
        };
        await sendMessageToWhatsapp(payload, 'ai', 'ai');
        await clearDBandNotifyEndMatchToCouple('ai', clientid);
      }
    }
  }
}
