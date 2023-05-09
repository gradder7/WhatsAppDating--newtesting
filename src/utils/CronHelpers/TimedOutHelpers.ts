/* eslint-disable no-console */
// import { getFieldAndMatch } from '../UnmatchedHelper/MatchHelper';
import { getUserField } from '../CommonHelpers/FirebaseHelper';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import type { PropsFormatted } from '../WAMessageHelper';
import { sendMessageToWhatsapp } from '../WAMessageHelper';

export async function sendTimedOutTemplateToAll(
  clientA: string,
  clientB: string
) {
  const usernameA = await getUserField(ReplyConstants.USERNAME, clientA);

  const usernameB = await getUserField(ReplyConstants.USERNAME, clientB);

  // Nofity unmatched to clientA
  const payloadA: PropsFormatted = {
    phoneNumber: clientA,
    template: true,
    templateName: 'fate_notification_timeout',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${usernameA}*`,
  };

  const payloadB: PropsFormatted = {
    phoneNumber: clientB,
    template: true,
    templateName: 'fate_notification_timeout',
    templateLanguageCode: 'en_US',
    variables: true,
    variable1: `*${usernameB}*`,
  };

  await Promise.all([
    sendMessageToWhatsapp(payloadA),
    sendMessageToWhatsapp(payloadB),
  ]);
}
