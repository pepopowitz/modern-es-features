const example = require('./index');

describe('02_fat_arrows', function() {
  it('returns a person', function() {
    const result = example(true);

    expect(result).toEqual({
      first: 'Steven',
      last: 'Hicks'
    })
  })
});
