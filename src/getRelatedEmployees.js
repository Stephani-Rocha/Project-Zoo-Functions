const data = require('../data/zoo_data');

const collaborators = data.employees;

function isManager(id) {
  const objManager = collaborators.some((elementSome) => elementSome.managers.includes(id));
  return objManager;
}

isManager();

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const responsavel = collaborators.filter((element) => element.managers.includes(managerId));
    const concatName = responsavel.reduce((acc, item) => {
      const name = `${item.firstName} ${item.lastName}`;
      acc.push(name);
      return acc;
    }, []);

    return concatName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
