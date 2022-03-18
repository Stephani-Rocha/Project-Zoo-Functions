const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const objAnimal = species.find((elementoFilter) => elementoFilter.name === animal);
  return objAnimal.residents.every((elementoEvery) => elementoEvery.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
