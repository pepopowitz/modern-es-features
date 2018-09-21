const index = require('./index');

describe('05_destructuring', () => {
  describe('greetPerson', () => {
    it('greets a person', () => {
      const result = index.greetPerson({
        firstName: 'Earl',
        lastName: 'Sinclair',
      });

      expect(result).toEqual('Hello, Earl Sinclair!!');
    });
  });

  describe('greetPeople', () => {
    it('greets people', () => {
      const people = [
        { firstName: 'Earl', lastName: 'Sinclair' },
        { firstName: 'Fran', lastName: 'Sinclair' },
        { firstName: 'Baby', lastName: 'Sinclair' },
      ];

      const result = index.greetPeople(people);

      expect(result).toEqual({
        first: 'Hello, Earl Sinclair!!',
        second: 'Hello, Fran Sinclair!!',
        third: 'Hello, Baby Sinclair!!',
      });
    });
  });

  describe('describeDinosaur', () => {
    it('describes Fran', () => {
      const dinosaur = {
        firstName: 'Fran',
        lastName: 'Sinclair',
        species: 'Allosaurus',
      };

      const result = index.describeDinosaur(dinosaur);

      expect(result).toEqual('Fran Sinclair is a Allosaurus.');
    });

    it('describes Baby', () => {
      const dinosaur = {
        firstName: 'Baby',
        lastName: 'Sinclair',
      };

      const result = index.describeDinosaur(dinosaur);

      expect(result).toEqual('Baby Sinclair is a Megalosaurus.');
    });
  });
});
