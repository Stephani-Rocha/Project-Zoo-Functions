const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((nameSearched) => (employeeName === nameSearched.firstName
                                                || employeeName === nameSearched.lastName));
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
