const { kitten, kitten2, angryKitten } = require('./index');

describe('10_class_syntax', () => {
  describe('kitten', () => {
    it('sets kitten name', () => {
      const mrKitty = new kitten();
      mrKitty.name = 'Mr. Turtle';

      expect(mrKitty.name).toEqual('Mr. Turtle');
    });

    it('makes kitten call', () => {
      const mrKitty = new kitten();
      mrKitty.name = 'Mr. Turtle';

      const result = mrKitty.makeKittenCall();

      expect(result).toEqual('Come here, Mr. Turtle!');
    });

    it('defaults to non-specific name', () => {
      const mrKitty = new kitten();

      expect(mrKitty.name).toEqual('kitty kitty');
    });

    it('lets me specify kitten name up front', () => {
      const mrKitty = new kitten('Mr Turtle');

      expect(mrKitty.name).toEqual('Mr Turtle');
    });
  });

  // describe('kitten2', () => {
  //   it('sets kitten name', () => {
  //     const mrKitty = new kitten2();
  //     mrKitty.name = 'Mr. Turtle';

  //     expect(mrKitty.name).toEqual('Mr. Turtle');
  //   });

  //   it('makes kitten call', () => {
  //     const mrKitty = new kitten2();
  //     mrKitty.name = 'Mr. Turtle';

  //     const result = mrKitty.makeKittenCall();

  //     expect(result).toEqual('Come here, Mr. Turtle!');
  //   });

  //   it('defaults to non-specific name', () => {
  //     const mrKitty = new kitten2();

  //     expect(mrKitty.name).toEqual('kitty kitty');
  //   });

  //   it('lets me specify kitten name up front', () => {
  //     const mrKitty = new kitten2('Mr Turtle');

  //     expect(mrKitty.name).toEqual('Mr Turtle');
  //   });
  // });

  // describe('scratches', () => {
  //   it('is false for kitten2', () => {
  //     const flower = new kitten2('Flower');

  //     expect(flower.scratches).toBe(false);
  //   });

  //   it('is true for angry kitten', () => {
  //     const turtle = new angryKitten('turtle');

  //     expect(turtle.scratches).toBe(true);
  //   });
  // });
});
