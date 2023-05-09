/* eslint-disable jest/no-commented-out-tests */
import { getFirestore } from 'firebase-admin/firestore';

import { fateHelper } from './fatehelper';

require('dotenv').config({
  path: '.env',
});

jest.setTimeout(20000);

describe('fateHelper tests', () => {
  describe('fateHelper', () => {
    it('should send responses', async () => {
      const clientDoc = getFirestore()
        .collection('apps')
        .doc(process.env.WABA_ID as string)
        .collection('clients')
        .doc(process.env.TEST_PHONE_NUMBER_DUBAI as string);

      const clientFields = (await clientDoc.get()).data();
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(clientFields, null, 2));

      const mockMessage = {
        pricing: null,
        metadata: {
          phone_number_id: '115375284757588',
          display_phone_number: process.env.TEST_PHONE_NUMBER_DUBAI as string,
        },
        messaging_product: 'whatsapp',
        message: {
          from: process.env.TEST_PHONE_NUMBER_DUBAI as string,
          timestamp: Math.floor(Date.now() / 1e3),
          type: 'text',
          text: {
            // body: `Edit Profile ✏️`,
            // body: `Find Match`,
            // body: `hi`,
            // body: '18-22',
            // body: 'xogz',
            // body: 'Mumbai',
            // body: `Male 🧍‍♂️`,
            body: `Help`,
            // body: `Match Me!`,
          },
          id: 'wamid.HBgMOTE4NzU0NTM1ODU5FQIAEhgUM0ExRDE1RTg4QkYxNzgwMjAzODMA',
        },
        type: 'message',
        timestamp: Date.now(),
        origin: null,
        error: null,
        contact: {
          profile: { name: 'Test User' },
          wa_id: process.env.TEST_PHONE_NUMBER_DUBAI as string,
        },
        status_raw: null,
        status: null,
        clientid: process.env.TEST_PHONE_NUMBER_DUBAI as string,
      };

      const res = await fateHelper(mockMessage, clientDoc);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
