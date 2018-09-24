let bowlsRemaining = 1;
function washBowls() {
  bowlsRemaining = 3;
}
function runOutOfBowls() {
  bowlsRemaining = 0;
}

function takeCareOfKitten(kitten) {
  return callKitten(kitten)
    .then(() => petKitten(kitten))
    .then(() => getBowlForKitten(kitten))
    .then(() => feedKitten(kitten));
}

function callKitten(kitten) {
  console.log('start: calling kitten');
  return new Promise((resolve, reject) => {
    console.log('end: calling kitten');
    resolve('');
  })
}

function petKitten(kitten) {
  console.log('start: petting kitten');
  return new Promise((resolve) => {
    console.log('end: petting kitten');
    resolve('');
  })
}

function getBowlForKitten(kitten) {
  console.log('start: getting bowl for kitten');
  return new Promise((resolve, reject) => {
    if (bowlsRemaining > 0) {
      console.log('end: getting bowl for kitten');
      resolve('');
    } else 
    {
      console.error('oh no we are out of bowls!!!')
      reject('oh no we are out of bowls!!!');
    }
  })
}

function feedKitten(kitten, done, err) {
  console.log('start: feeding kitten');
  return new Promise((resolve) => {
    console.log('end: feeding kitten');
    resolve('');
  })
}

module.exports = {
  takeCareOfKitten,
  washBowls,
  runOutOfBowls,
};
