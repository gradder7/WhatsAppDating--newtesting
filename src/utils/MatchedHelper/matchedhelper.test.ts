/* eslint-disable jest/no-commented-out-tests */

import { facilitateConversation } from './index';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(20000);

describe('facilitateConversation tests', () => {
  describe('facilitateConversation', () => {
    it('should send responses', async () => {
      const matchedClientId = process.env.TEST_PHONE_NUMBER_DUBAI as string;

      const mockMessage = {
        pricing: null,
        metadata: {
          phone_number_id: '115375284757588',
          display_phone_number: process.env.TEST_PHONE_NUMBER as string,
        },
        messaging_product: 'whatsapp',
        message: {
          from: process.env.TEST_PHONE_NUMBER as string,
          timestamp: Math.floor(Date.now() / 1e3),
          type: 'text',
          text: {
            body: `hello 👋`,
          },
          id: 'wamid.HBgMOTE4NzU0NTM1ODU5FQIAEhgUM0ExRDE1RTg4QkYxNzgwMjAzODMA',
        },
        type: 'message',
        timestamp: Date.now(),
        origin: null,
        error: null,
        contact: {
          profile: { name: 'Test User' },
          wa_id: process.env.TEST_PHONE_NUMBER as string,
        },
        status_raw: null,
        status: null,
        clientid: process.env.TEST_PHONE_NUMBER as string,
      };

      const res = await facilitateConversation(mockMessage, matchedClientId);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
