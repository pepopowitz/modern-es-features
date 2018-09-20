function exampleOne() {
  var name = 'Steve';

  return name;
}

function exampleTwo(isFormal) {
  var name = 'Steve';

  if (isFormal) {
    name = 'Steven';
  }

  return name;
}

function exampleThree(isFormal) {
  var person = {
    first: 'Steve',
    last: 'Hicks'
  };

  if (isFormal) {
    person.first = 'Steven';
  }

  return person;
}

function exampleFour(isFormal) {
  // console.log('newName: ', newName);
  let person = {
    first: 'Steve',
    last: 'Hicks'
  };

  if (isFormal) {
    var newName = 'Steven';
    person.first = newName;
  }

  return person;
}

module.exports = {
  exampleOne,
  exampleTwo,
  exampleThree,
  exampleFour,
};
