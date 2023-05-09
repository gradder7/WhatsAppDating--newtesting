/* eslint-disable no-console */

import console from 'console';

import {
  getAllUserFeilds,
  setLatestMessage,
  updateUserField,
} from '../CommonHelpers/FirebaseHelper';
import {
  isFieldInArray,
  isMessageBad,
  isMessageLatest,
  // isMessageLatest,
  isMessageValid,
  isMessageWelcome,
} from '../CommonHelpers/MessageCheckers';
import { extractText } from '../CommonHelpers/MessageParsers';
import { sendWelcome } from '../CommonHelpers/MessageSenders';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import {
  sendAgeERROR,
  sendGenderERROR,
  sendLocationERROR,
  sendObtainAge,
  sendObtainBio,
  sendObtainGender,
  sendObtainLocation,
  sendObtainUsername,
  sendProfileCreatedMessage,
} from './MessageSenders';

// eslint-disable-next-line consistent-return
export async function replyToNewUser(messageObject: any) {
  console.log('Trigger: Reply to New User');
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
      if (msgIsWelcome) return sendWelcome(clientid);

      const clientFields = await getAllUserFeilds(clientid);
      let gender = clientFields?.[ReplyConstants.GENDER] || '';
      let location = clientFields?.[ReplyConstants.LOCATION] || '';
      let age = clientFields?.[ReplyConstants.AGE] || '';
      let username = clientFields?.[ReplyConstants.USERNAME] || '';
      let bio = clientFields?.[ReplyConstants.BIO] || '';

      // New User Interactions
      switch (true) {
        // Trigger Create Profile

        // Start Profile Creation
        case ReplyConstants.NEW_USER_WELCOME_MESSAGE_BUTTON_START.toLowerCase() ===
          lowercaseMessage ||
          ReplyConstants.SYSTEM_PROMPTS_MATCH_BUTTON.toLowerCase() ===
            lowercaseMessage:
          console.log('Trigger: New User Create Profile Username');

          // Get age from user
          await sendObtainAge(clientid);
          break;

        // Obtain Age
        case age === '' || typeof age === undefined:
          console.log('Trigger: New User Age');
          age = message;

          if (
            !isFieldInArray(age, ReplyConstants.SYSTEM_PROMPTS_ARRAY_AGE_RANGES)
          ) {
            await sendAgeERROR(clientid);
            break;
          }
          await updateUserField(ReplyConstants.AGE, age, clientid);
          return sendObtainUsername(clientid);

        // Obtain Username
        case username === '' || typeof username === undefined:
          console.log('Trigger: New User Username');
          username = message;

          // Manually check if username is bad
          if (isMessageBad(username))
            await updateUserField(ReplyConstants.MANUAL_CHECK, true, clientid);

          await updateUserField(ReplyConstants.USERNAME, username, clientid);
          return sendObtainLocation(clientid);

        // Obtain Location
        case location === '' || typeof location === undefined:
          console.log('Trigger: New User Location');
          location = message;

          if (
            !isFieldInArray(
              location,
              ReplyConstants.SYSTEM_PROMPTS_ARRAY_LOCATIONS
            )
          ) {
            await sendLocationERROR(clientid);
            break;
          }
          await updateUserField(ReplyConstants.LOCATION, location, clientid);
          return sendObtainGender(clientid);

        // Obtain Gender
        case gender === '' || typeof gender === undefined:
          console.log(`Trigger: New User Gender:`);
          gender = message;

          if (
            !isFieldInArray(gender, ReplyConstants.SYSTEM_PROMPTS_ARRAY_GENDERS)
          ) {
            await sendGenderERROR(clientid);
            break;
          }
          await updateUserField(ReplyConstants.GENDER, gender, clientid);

          await updateUserField(
            ReplyConstants.CURRENT_MATCH_CLIENT_ID,
            '',
            clientid
          );
          return sendObtainBio(clientid);

        // Obtain bio
        case (bio === '' || typeof bio === undefined) && gender !== '':
          console.log('Trigger: New User Get Bio');
          bio = message;
          await updateUserField(ReplyConstants.BIO, bio, clientid);
          await updateUserField(
            ReplyConstants.SUBSCRIPTION_STATUS,
            true,
            clientid
          );
          return sendProfileCreatedMessage(
            clientid,
            username,
            location,
            age,
            gender,
            bio
          );

        // Any other messages from new user, which is not a system message will trigger welcome message
        case !ReplyConstants.SYSTEM_PROMPTS.includes(lowercaseMessage):
          console.log('Trigger: New User Welcome Message');
          return sendWelcome(clientid);

        default:
          console.log('Trigger: New User Default Case');
          return sendWelcome(clientid);
      }
    }

    console.log('Trigger: End of replyToNewUser');
  }
}
