import { executeUnmatchTimedOutUsers } from '../CronHelpers/TimedOutUnmatch';

/* eslint-disable no-console */
require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(600000);

describe('TimeOutUnmatch tests', () => {
  describe('TimeOutUnmatch', () => {
    it('should send responses', async () => {
      const res = await executeUnmatchTimedOutUsers();
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      expect(res).not.toEqual(null);
    });
  });
});
