const { employees, species } = require('../data/zoo_data'); // me retorna o array de funcionários e o array de species;

const returnFirstSpecies = (id) => { // essa função tem como objetivo me retornar a 1ª especie que o funcionário for responsável (id);
  const compareID = employees.find((employee) => employee.id === id);
  const returnFirstSpeciesAnimal = compareID.responsibleFor[0];
  return returnFirstSpeciesAnimal;
};

function getOldestFromFirstSpecies(id) {
  const returnSpecies = species.find((animal) => animal.id === returnFirstSpecies(id)); // estou comparando o animal.id com o id do animal retornado pela função "procuraPrimeiraEspecie";
  const oldestAnimal = returnSpecies.residents.reduce((acc, item) => { // o acc me retorna o array de 3 animais da espécie, e o item me retorna casa item do array residents;
    if (acc.age > item.age) {
      return acc;
    }
    return item;
  });
  const response = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return response;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
