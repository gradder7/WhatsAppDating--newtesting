import { sendApology } from './BanHelper';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(20000);

describe('banHelper tests', () => {
  describe('banHelper', () => {
    it('should send responses', async () => {
      const cliendId = process.env.TEST_PHONE_NUMBER || '';
      const res = await sendApology(cliendId);
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
