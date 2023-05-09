import { executeMatchTimedOutUsers } from '../CronHelpers/TimedOutMatch';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(600000);

describe('TimeOutMatch tests', () => {
  describe('TimeOutMatch', () => {
    it('should send responses', async () => {
      const res = await executeMatchTimedOutUsers();
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
