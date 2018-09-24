function kitten(name) {
  this.name = name || 'kitty kitty';
}

kitten.prototype.makeKittenCall = function() {
  return `Come here, ${this.name}!`;
}

const kitten2 = {};

const angryKitten = {};

module.exports = {
  kitten,
  kitten2,
  angryKitten,
}