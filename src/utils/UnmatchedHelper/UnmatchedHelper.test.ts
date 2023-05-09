/* eslint-disable jest/no-commented-out-tests */
import { replyToUnmatchedUser } from '.';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(20000);

describe('replyToUnmatchedUser tests', () => {
  describe('replyToUnmatchedUser', () => {
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
            body: `Match me! 👍`,
            // body: `hello`,
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

      const res = await replyToUnmatchedUser(mockMessage);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});

describe('ReplyToOtherHelper tests', () => {
  describe('replyToOtherUser', () => {
    it('should send responses', async () => {
      const mockMessage = {
        pricing: null,
        metadata: {
          phone_number_id: '115375284757588',
          display_phone_number: '918754535859',
        },
        messaging_product: 'whatsapp',
        message: {
          from: '918754535859',
          timestamp: Math.floor(Date.now() / 1e3),
          type: 'text',
          text: {
            // body: `Start matching`,
            // body: `name fem`,
            // body: `Female 💃`,
            body: `Match me! 👍`,
          },
          id: 'wamid.HBgMOTE4NzU0NTM1ODU5FQIAEhgUM0ExRDE1RTg4QkYxNzgwMjAzODMA',
        },
        type: 'message',
        timestamp: Date.now(),
        origin: null,
        error: null,
        contact: {
          profile: { name: 'Gokul Saravanan' },
          wa_id: '918754535859',
        },
        status_raw: null,
        status: null,
        clientid: '918754535859',
      };

      const res = await replyToUnmatchedUser(mockMessage);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
