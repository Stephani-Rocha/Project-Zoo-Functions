const { prices } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }

  const objectPeoples = {};

  const returnAges = entrants.map((element) => element.age);
  const childAge = returnAges.filter((elementFilter) => elementFilter < 18);
  const adultAge = returnAges.filter((elementFilter) => elementFilter >= 18 && elementFilter < 50);
  const seniorAge = returnAges.filter((elementFilter) => elementFilter >= 50);

  objectPeoples.child = childAge.length;
  objectPeoples.adult = adultAge.length;
  objectPeoples.senior = seniorAge.length;

  return objectPeoples;
}
console.log(countEntrants({}));

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }

  const child = countEntrants(entrants).child * prices.child;
  const adult = countEntrants(entrants).adult * prices.adult;
  const senior = countEntrants(entrants).senior * prices.senior;

  return child + adult + senior;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
