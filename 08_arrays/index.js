const api = require('./api');

function adoptKittens(kittens) {
  for (let i = 0; i < kittens.length; i++) {
    api.adoptKitten(kittens[i]);
  }
}

function findBestKitten(kittens) {
  for (let i = 0; i < kittens.length; i++) {
    if (kittens[i].name === 'Potatoes') {
      return kittens[i];
    }
  }

  return undefined;
}

function getKittenNames(kittens) {
  let result = [];

  for (let i = 0; i < kittens.length; i++) {
    result.push(kittens[i].name);
  }

  return result;
}

function getGrayKittens(kittens) {
  let result = [];

  for (let i = 0; i < kittens.length; i++) {
    if (kittens[i].color === 'gray') {
      result.push(kittens[i]);
    }
  }

  return result;
}

function countKittensByColor(kittens) {
  let result = {};

  for (let i = 0; i < kittens.length; i++) {
    const color = kittens[i].color;
    if (result[color]) {
      result[color]++;
    } else {
      result[color] = 1;
    }
  }

  return result;
}

module.exports = {
  adoptKittens,
  findBestKitten,
  getKittenNames,
  getGrayKittens,
  countKittensByColor,
};
