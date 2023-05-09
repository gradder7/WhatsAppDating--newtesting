import { updateFieldsCompletedForAllClientsParallel } from '../CronHelpers/AllFieldsUpdateCheck';

require('dotenv').config({
  path: '.env.local',
});

jest.setTimeout(20000);

describe('profileCompletionFieldUpdate tests', () => {
  describe('profileCompletionFieldUpdate', () => {
    it('should send responses', async () => {
      const res = await updateFieldsCompletedForAllClientsParallel();
      // eslint-disable-next-line no-console
      console.log(`Result: ${res}`);
      // eslint-disable-next-line no-console
      console.log(`Result: ${JSON.stringify(res, null, 2)}`);
      expect(res).not.toEqual(null);
    });
  });
});
