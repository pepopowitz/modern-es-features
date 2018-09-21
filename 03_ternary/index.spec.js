const choosePartingWord = require('./index');

describe('03_ternary', () => {
  it('returns a parting word for English', () => {
    const result = choosePartingWord('English');

    expect(result).toEqual('Goodbye!');
  });

  it('returns a parting word for Spanish', () => {
    const result = choosePartingWord('Spanish');

    expect(result).toEqual('Adios!');
  });
});
