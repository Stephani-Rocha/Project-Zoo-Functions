const { hours, species } = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(hours); // essa variável me traz os dias da semana;

const openingHoursZoo = Object.entries(hours); // essa variável me traz o horário de funcionamento do Zoo (dias da semana, abertura e fechamento);

function scheduleDay(day) { // essa função tem como objetivo exibir os animais que estarão em exibição de acordo com o dia "(day)" passado como parâmetro.
  return species.filter((filterAnimal) => (filterAnimal.availability.includes(day)))
    .map((mapsNameAnimal) => mapsNameAnimal.name);
}
scheduleDay();

function weeksAgenda() { // essa função tem como objetivo retornar a agenda da semana completa, contendo horário de funcionamento e animais em exibição.
  const agenda = {};
  openingHoursZoo.forEach((operation) => {
    const { open, close } = operation[1]; // operation na posição [1], me traz os horários de abertura e fechamento do Zoo;
    Object.assign(agenda, { [operation[0]]: { // operation na posição [0] me retorna os dias da semana, nesse caso, de acordo com o dia solicitado pelo usuário como parametro, ele vai me retornar um objeto contendo o horário de abertura e fechamento daquele dia e os animais que estiverem em exibição.
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: scheduleDay(operation[0]),
    } });
  });

  agenda.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return agenda;
}
weeksAgenda();

const animalSearch = (pesquisa) => species.find((animal) => animal.name === pesquisa).availability; // essa função tem como objetivo retornar a programação do animal que for pesquisado.

const daySearch = (pesquisa) => ({ [pesquisa]: weeksAgenda()[pesquisa] }); // essa função tem como objetivo retornar o horário de funcionamento do dia da semana que for pesquisado;

function getSchedule(scheduleTarget) { // essa é a função principal, que recebe os parâmetros passado pelos usuários, contendo as condições para casa situação.
  if (!scheduleTarget) return weeksAgenda();
  if (species.find((anim) => anim.name === scheduleTarget)) return animalSearch(scheduleTarget);
  if (daysOfTheWeek.includes(scheduleTarget)) return daySearch(scheduleTarget);
  if (species.find((anim) => anim.name !== scheduleTarget
  && daysOfTheWeek.find((day) => day !== scheduleTarget))) return weeksAgenda();
}

getSchedule();

module.exports = getSchedule;
