/* eslint-disable no-console */

import {
  setLatestMessage,
  updateUserField,
} from '@/utils/CommonHelpers/FirebaseHelper';
import { extractText } from '@/utils/CommonHelpers/MessageParsers';
import {
  sendChurnedUserWelcome,
  sendFAQ,
  sendUnsubscribed,
} from '@/utils/CommonHelpers/MessageSenders';
import * as ReplyConstants from '@/utils/CommonHelpers/ReplyConstants';
import { handleRestart } from '@/utils/CommonHelpers/RestartHelper';
import { facilitateConversation } from '@/utils/MatchedHelper';
import { replyToNewUser } from '@/utils/NewUserHelper';
import { replyToUnmatchedUser } from '@/utils/UnmatchedHelper';

export async function fateHelper(messageObject: any, clientDoc: any) {
  const { clientid }: { clientid: string } = messageObject;
  const clientFields = (await clientDoc.get()).data();

  // Handle Banned Users
  if (clientFields?.banned === true) {
    console.log('Trigger Fate: Banned User');
    return;
  }

  // Extract message text
  const text = extractText(messageObject);
  const lowercaseMessage = text.toLowerCase().trim();
  console.log('Message text in fateHelper: ', lowercaseMessage);

  // Handle Restart & Edit Profile -> Currently they both trigger restart
  // TODO: Consider different experience for Edit Profile
  if (
    ReplyConstants.SYSTEM_PROMPTS_ARRAY_RESTART_BOT.includes(
      lowercaseMessage
    ) ||
    ReplyConstants.SYSTEM_PROMPTS_ARRAY_EDIT_PROFILE.includes(lowercaseMessage)
  ) {
    console.log('Trigger Fate: Restart Bot');
    await handleRestart(
      clientid,
      (clientFields?.currentMatchClientId as string) || undefined
    );
    return;
  }

  // Handle FAQs
  if (
    ReplyConstants.WELCOME_MESSAGE_BUTTON_FAQ.toLowerCase() ===
      lowercaseMessage ||
    ReplyConstants.USER_HELP_MESSAGES.includes(lowercaseMessage)
  ) {
    console.log('Trigger Fate: FAQs');
    await sendFAQ(clientid);
    return;
  }

  // Handle Subscribe
  if (lowercaseMessage === ReplyConstants.SUBSCRIBE_BUTTON.toLowerCase()) {
    console.log('Trigger Fate: Subscribe');
    await updateUserField(ReplyConstants.SUBSCRIPTION_STATUS, true, clientid);
  }

  // Handle Unsubscribe
  if (lowercaseMessage === ReplyConstants.UNSUBSCRIBE.toLowerCase()) {
    console.log('Trigger Fate: Unsubscribe');
    await setLatestMessage(clientid, ReplyConstants.UNSUBSCRIBE);
    await handleRestart(
      clientid,
      (clientFields?.currentMatchClientId as string) || undefined
    );
    await updateUserField(ReplyConstants.SUBSCRIPTION_STATUS, false, clientid);
    await sendUnsubscribed(clientid);
    return;
  }

  // Handle Rest
  const { username, location, age, gender, bio } = clientFields || {};
  // Check if user is subscribed
  let subscriptionStatus = clientFields?.subscriptionStatus;
  // If user has undefined subscription status, set to true
  if (subscriptionStatus === undefined) {
    subscriptionStatus = true;
    await updateUserField(ReplyConstants.SUBSCRIPTION_STATUS, true, clientid);
  }
  const currentMatchClientId = clientFields?.currentMatchClientId || undefined;
  console.log(
    `usr ${username}, loc ${location}, age ${age}, gender ${gender}, bio ${bio}, currMatch ${currentMatchClientId}`
  );
  console.log(
    `nullish coalescing: ${currentMatchClientId?.trim()?.length > 0}`
  );

  let userStatus;

  // If user is unsubscribed, send churned user welcome message
  if (subscriptionStatus === true) {
    if (currentMatchClientId?.trim()?.length > 0) {
      console.log(
        'checking if user is matched',
        currentMatchClientId?.trim()?.length > 0
      );
      userStatus = ReplyConstants.MATCHED_USER;
    } else if (
      !clientFields ||
      !username ||
      !gender ||
      !bio ||
      !age ||
      !location
    ) {
      userStatus = ReplyConstants.NEW_USER;
    } else if (
      username === '' ||
      gender === '' ||
      bio === '' ||
      age === '' ||
      location === ''
    ) {
      userStatus = ReplyConstants.NEW_USER;
    } else {
      userStatus = ReplyConstants.UNMATCHED_USER;
    }

    switch (userStatus) {
      case ReplyConstants.MATCHED_USER:
        console.log('Webhook Trigger Fate fn: facilitateConversation');
        await facilitateConversation(messageObject, currentMatchClientId);
        break;
      case ReplyConstants.NEW_USER:
        console.log('Webhook Trigger Fate fn: replyToNewUser');
        await replyToNewUser(messageObject);
        break;
      case ReplyConstants.UNMATCHED_USER:
        console.log('Webhook Trigger Fate fn: replyToUnmatchedUser');
        await replyToUnmatchedUser(messageObject);
        break;
      default:
        break;
    }
  } else {
    await sendChurnedUserWelcome(clientid);
  }
}
