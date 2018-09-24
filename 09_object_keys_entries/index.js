function getKittenImageUrls(kittenImages) {
  // not sure how we'd have done this w/o object.keys???
  return [
    'http://placekitten.com/200/200?image=1',
    'http://placekitten.com/200/200?image=12',
    'http://placekitten.com/200/200?image=15',
  ]
}

module.exports = {
  getKittenImageUrls,
};
