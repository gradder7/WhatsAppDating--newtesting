/* eslint-disable import/extensions */
import '@/utils/Firebase';

/* eslint-disable no-console */
import { getFirestore } from 'firebase-admin/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserField } from '@/utils/CommonHelpers/FirebaseHelper';
import * as ReplyConstants from '@/utils/CommonHelpers/ReplyConstants';

// Cron job to unmatch clients
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.query.key !== '919710091') {
      res.status(403).send('Invalid key');
      return;
    }

    const firestore = getFirestore();
    const conversationsCollection = firestore
      .collection('apps')
      .doc(process.env.WABA_ID as string)
      .collection('conversations');

    const now = Date.now();
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const snapshot = await conversationsCollection.get();

    const promises = snapshot.docs.map(async (doc) => {
      const conversationData = doc.data();
      const conversationId = doc.id;
      const [clientId, matchedClientId] = conversationId.split('_');

      if (
        clientId &&
        matchedClientId &&
        conversationData.lastupdatedat
        // TODO: Uncomment for v2
        // && conversationData.matchStatus === true
      ) {
        const timeDifference = now - conversationData.lastupdatedat;

        if (timeDifference > oneDayInMillis) {
          const currentMatchClientId = await getUserField(
            ReplyConstants.CURRENT_MATCH_CLIENT_ID,
            clientId
          );

          if (currentMatchClientId === matchedClientId) {
            console.log('Unmatching conversation:', conversationId);
            // await unmatchedTimeOut(clientId, matchedClientId);
            await doc.ref.update({ lastupdatedat: now, matchStatus: false });
          } else {
            await doc.ref.update({ matchStatus: false });
          }
        }
      }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    console.log('Cron job completed successfully.');
    res.status(200).send('success');
  } catch (error) {
    console.error('Error in cron job:', error);
    res.status(500).send('error');
  }
};

export default handler;
