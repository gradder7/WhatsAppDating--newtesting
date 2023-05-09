/* eslint-disable no-console */
import { saveEvent } from '../CommonHelpers/EventHelper';
import {
  getAllUserFeilds,
  updateUserField,
} from '../CommonHelpers/FirebaseHelper';
import * as ReplyConstants from '../CommonHelpers/ReplyConstants';
import { getMatch } from '../NewUserHelper/FirebaseHelper';
import {
  sendMatchedMessageToOther,
  sendMatchedMessageToSelf,
  sendUpdateToAll,
} from './MessageSenders';

export async function upsertMatchInDBandNotifyCouple(
  cliendId: string,
  matchedClientId: string
) {
  console.log(
    'upsertMatchInDBandNotifyCouple: initiating match for',
    cliendId,
    matchedClientId
  );
  // Clear looking for match since field
  await updateUserField(ReplyConstants.LOOKING_FOR_MATCH_SINCE, '', cliendId);
  await updateUserField(
    ReplyConstants.LOOKING_FOR_MATCH_SINCE,
    '',
    matchedClientId
  );

  // Update Matched Client ID of Current Client
  await updateUserField(
    ReplyConstants.CURRENT_MATCH_CLIENT_ID,
    matchedClientId,
    cliendId
  );

  // Update Matched Client ID of Matched Client
  await updateUserField(
    ReplyConstants.CURRENT_MATCH_CLIENT_ID,
    cliendId,
    matchedClientId
  );

  console.log('sendUpdateToAll');
  await sendUpdateToAll(cliendId, matchedClientId, 'MATCHED');
  await sendMatchedMessageToOther(cliendId, matchedClientId);

  console.log(`sendMatchedMessageToSelf ${cliendId}`);
  await sendMatchedMessageToSelf(cliendId, matchedClientId);
  await saveEvent(cliendId, matchedClientId, 'MATCHED');

  return null;
}

// Used when users unmatch, check if they have all the fields and match them
export async function getFieldAndMatch(clientId: string) {
  const fields = await getAllUserFeilds(clientId);
  const { username, location, age, gender, bio } = fields || {};
  if (username && location && age && gender && bio) {
    const match = await getMatch(clientId);
    if (match) {
      console.log(`matching ${clientId} with ${match}`);
      await upsertMatchInDBandNotifyCouple(clientId, match);
    }
  }
}
