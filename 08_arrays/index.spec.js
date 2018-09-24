const {
  adoptKittens,
  findBestKitten,
  getKittenNames,
  getGrayKittens,
  countKittensByColor,
} = require('./index');

jest.mock('./api', () => ({
  adoptKitten: jest.fn(),
}));
const api = require('./api');

describe('08_arrays', () => {
  describe('foreach', () => {
    it('does something for each item', () => {
      const kittens = [
        'Mr. Turtle',
        'Flower',
        'Mittens',
        'Potatoes',
        'Whiskers',
      ];

      adoptKittens(kittens);

      expect(api.adoptKitten).toHaveBeenCalledTimes(5);
    });
  });

  describe('find', () => {
    it('finds the best kitten', () => {
      const kittens = [
        {
          name: 'Mr. Turtle',
          id: 1,
          color: 'gray',
        },
        {
          name: 'Flower',
          id: 2,
          color: 'black',
        },
        {
          name: 'Potatoes',
          id: 3,
          color: 'gray',
        },
      ];

      const result = findBestKitten(kittens);

      expect(result).toEqual({
        name: 'Potatoes',
        id: 3,
        color: 'gray',
      });
    });
  });

  describe('map', () => {
    it('gets the kitten names', () => {
      const kittens = [
        {
          name: 'Mr. Turtle',
          id: 1,
          color: 'gray',
        },
        {
          name: 'Flower',
          id: 2,
          color: 'black',
        },
        {
          name: 'Potatoes',
          id: 3,
          color: 'gray',
        },
      ];

      const result = getKittenNames(kittens);

      expect(result).toEqual(['Mr. Turtle', 'Flower', 'Potatoes']);
    });
  });

  describe('filter', () => {
    it('gets the gray kittens', () => {
      const kittens = [
        {
          name: 'Mr. Turtle',
          id: 1,
          color: 'gray',
        },
        {
          name: 'Flower',
          id: 2,
          color: 'black',
        },
        {
          name: 'Potatoes',
          id: 3,
          color: 'gray',
        },
      ];

      const result = getGrayKittens(kittens);

      expect(result).toEqual([
        {
          name: 'Mr. Turtle',
          id: 1,
          color: 'gray',
        },
        {
          name: 'Potatoes',
          id: 3,
          color: 'gray',
        },
      ]);
    });
  });

  describe('reduce', () => {
    it('counts kittens by color', () => {
      const kittens = [
        {
          name: 'Mr. Turtle',
          id: 1,
          color: 'gray',
        },
        {
          name: 'Flower',
          id: 2,
          color: 'black',
        },
        {
          name: 'Potatoes',
          id: 3,
          color: 'gray',
        },
      ];

      const result = countKittensByColor(kittens);

      expect(result).toEqual({
        gray: 2,
        black: 1,
      });
    });
  });
});
