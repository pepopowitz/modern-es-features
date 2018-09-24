const { takeCareOfKitten, runOutOfBowls, washBowls } = require('./a_callback');

describe('11_async_await', () => {
  describe('a_callback', () => {
    it('feeds a kitten when we have bowls', (done) => {
      washBowls();

      const kitten = {
        name: 'Turtle',
      };

      const err = jest.fn();
      takeCareOfKitten(kitten, () => {
        expect(err).not.toHaveBeenCalled();
        done();
      }, err);

    });

    it('errs out when we don`t have bowls', (done) => {
      runOutOfBowls();

      const kitten = {
        name: 'Turtle',
      };

      const err = (msg) => {
        //assertion by the fact that this was called
        done();        
      }

      takeCareOfKitten(kitten, () => {
        expect(err).toHaveBeenCalledTimes(1);
        done();
      }, err);
    });
  });
});
