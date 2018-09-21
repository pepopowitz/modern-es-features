const buildGreeting = require('./index');

describe('04_template_literals', () => {
  it('returns a greeting', () => {
    const result = buildGreeting('Max');

    expect(result).toEqual('Hello, Max! How are you?');
  });
});

module.exports = buildGreeting;