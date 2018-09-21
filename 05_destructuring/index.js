function greetPerson(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;

  return `Hello, ${firstName} ${lastName}!!`;
}

function greetPeople(people) {
  const firstPerson = people[0];
  const secondPerson = people[1];
  const thirdPerson = people[2];

  return {
    first: greetPerson(firstPerson),
    second: greetPerson(secondPerson),
    third: greetPerson(thirdPerson),
  };
}

function describeDinosaur(dinosaur) {
  const firstName = dinosaur.firstName;
  const lastName = dinosaur.lastName;
  const species = dinosaur.species || 'Megalosaurus';

  return `${firstName} ${lastName} is a ${species}.`;
}

module.exports = { greetPerson, greetPeople, describeDinosaur };
