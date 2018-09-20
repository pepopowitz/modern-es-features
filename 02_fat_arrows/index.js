function buildName(determineFirstName, determineLastName) {
  return {
    first: determineFirstName(),
    last: determineLastName(),
  };
}

function getFirstName(isFormal) {
  if (isFormal) {
    return 'Steven';
  }
  return 'Steve';
}

function getLastName() {
  return 'Hicks';
}

function example(isFormal) {

  const determineFirstName = function() {
    return getFirstName(isFormal);
  };
  
  const determineLastName = function() {
    return getLastName();
  };

  const person = buildName(determineFirstName, determineLastName);

  return person;
}

module.exports = example;
