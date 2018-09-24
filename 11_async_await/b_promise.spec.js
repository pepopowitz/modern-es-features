const { takeCareOfKitten, runOutOfBowls, washBowls } = require('./b_promise');

describe('11_async_await', () => {
  describe('b_promise', () => {
    it('feeds a kitten when we have bowls', (done) => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };
      
      takeCareOfKitten(kitten)
        .then(() => {
          done();
        })
        .catch(() => {
          expect(true).toBe(false);
          done();
        });

    });

    it('errs out when we don`t have bowls', (done) => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      takeCareOfKitten(kitten)
        .then(() => {
          expect(true).toBe(false);
          done();
        })
        .catch(() => {
          expect(true).toBe(true);
          done();
        });
    });
  });
});
