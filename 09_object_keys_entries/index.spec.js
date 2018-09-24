const { getKittenImageUrls } = require('./index');

describe('09_object_keys_entries', () => {
  describe('object.keys', () => {
    it('iterates over object keys', () => {
      const kittenImages = {
        turtle: 'http://placekitten.com/200/200?image=1',
        flower: 'http://placekitten.com/200/200?image=12',
        potatoes: 'http://placekitten.com/200/200?image=15'
      }

      const result = getKittenImageUrls(kittenImages);

      expect(result).toEqual([
        'http://placekitten.com/200/200?image=1',
        'http://placekitten.com/200/200?image=12',
        'http://placekitten.com/200/200?image=15',
      ])
    })
  })
})