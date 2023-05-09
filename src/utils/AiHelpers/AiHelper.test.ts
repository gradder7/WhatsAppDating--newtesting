/* eslint-disable jest/no-commented-out-tests */
import { aiReplyToUser } from '.';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(20000);

describe('aiReplyToUser tests', () => {
  describe('aiReplyToUser', () => {
    it('should send responses', async () => {
      const mockMessage = {
        pricing: null,
        metadata: {
          phone_number_id: '115375284757588',
          display_phone_number: '971562457525',
        },
        messaging_product: 'whatsapp',
        message: {
          from: '971562457525',
          timestamp: Math.floor(Date.now() / 1e3),
          type: 'text',
          text: {
            // body: `Match me! 👍`,
            body: `end chat`,
            // body: `Male 🧍‍♂️`,
          },
          id: 'wamid.HBgMOTE4NzU0NTM1ODU5FQIAEhgUM0ExRDE1RTg4QkYxNzgwMjAzODMA',
        },
        type: 'message',
        timestamp: Date.now(),
        origin: null,
        error: null,
        contact: {
          profile: { name: 'Gokul Saravanan' },
          wa_id: '971562457525',
        },
        status_raw: null,
        status: null,
        clientid: '971562457525',
      };

      const res = await aiReplyToUser(mockMessage);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
