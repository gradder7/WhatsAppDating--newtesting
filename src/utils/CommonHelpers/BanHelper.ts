import * as ReplyConstants from '@/utils/CommonHelpers/ReplyConstants';

import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';

export async function sendApology(cliendId: any): Promise<void> {
  const payload: PropsFormatted = {
    phoneNumber: cliendId,
    quickReply: true,
    msgBody: ReplyConstants.BAN_APOLOGY_MESSAGE,
    msgFooter: ReplyConstants.DEFAULT_FOOTER,
    button1: ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON,
  };
  await sendMessageToWhatsapp(payload);
}
