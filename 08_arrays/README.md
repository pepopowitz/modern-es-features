# Arrays

## array.forEach
## array.find
## array.map
## array.filter
## array.reduce

* adoptKittens
  * array.forEach
    * forEach is for side-effects
* findBestKitten
  * array.find
* getKittenNames
  * array.map
    * map is for changing shape
* findGrayKittens
  * array.filter
* countKittensByColor
  * array.reduce

    return kittens.reduce((soFar, current) => {
      const { color } = current;
      if (soFar[color]) {
        return {
          ...soFar,
          [color]: soFar[color] + 1
        }
      } else {
        return {
          ...soFar,
          [color]: 1,
        }
      }
    }, {})
