const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalUndefined = data.species.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return (acc);
    }, {});
    return animalUndefined;
  }
  const foundAnimal = data.species.find((specie) => animal.specie === specie.name);
  if (Object.keys(animal).includes('sex')) {
    const animalSex = foundAnimal.residents.filter((resident) => resident.sex === animal.sex);
    return animalSex.length;
  }
  return foundAnimal.residents.length;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
