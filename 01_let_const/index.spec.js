const index = require('./index');

describe('01_let_const', function() {
  describe('exampleOne', function() {
    it('returns Steve', function() {
      var result = index.exampleOne();

      expect(result).toEqual('Steve');
    });
  });

  describe('exampleTwo', function() {
    it('returns Steve informally', function() {
      var result = index.exampleTwo(false);

      expect(result).toEqual('Steve');
    });

    it('returns Steve formally', function() {
      var result = index.exampleTwo(true);

      expect(result).toEqual('Steven');
    });
  });

  describe('exampleThree', function() {
    it('returns Steve informally', function() {
      var result = index.exampleThree(false);

      expect(result).toEqual({
        first: 'Steve',
        last: 'Hicks',
      });
    });

    it('returns Steven formally', function() {
      var result = index.exampleThree(true);

      expect(result).toEqual({
        first: 'Steven',
        last: 'Hicks',
      });
    });
  });

  describe('exampleFour', function() {
    it('returns Steven formally', function() {
      var result = index.exampleFour(true);

      expect(result).toEqual({
        first: 'Steven',
        last: 'Hicks',
      });
    });
  });
});
