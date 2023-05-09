import { sendProfile } from '../UnmatchedHelper/MessageSenders';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(1200000);

describe('bio tests', () => {
  describe('bio', () => {
    it('should send responses', async () => {
      const res = await sendProfile('971562457525', '918754535859');
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
