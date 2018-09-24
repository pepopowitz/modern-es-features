const { takeCareOfKitten, runOutOfBowls, washBowls } = require('./c_async');

describe('11_async_await', () => {
  describe('c_async', () => {
    it('feeds a kitten when we have bowls', async () => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };

      await takeCareOfKitten(kitten);

      // assertion by the fact that this didn't throw an exception
    });

    it('errs out when we don`t have bowls', async () => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      try {
        await takeCareOfKitten(kitten);

        // fails if it gets here.
        expect(true).toBe(false);
      }
      catch (ex) {
        // passes if it gets here.
      }
    });
  });
});
