const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// essa função tem como objetivo retornar um objeto contendo as informações de todos os funcionários, caso não seja passado nenhum parametro para a função;
function retornaTodasAsInformacoes() {
  const infoArray = data.employees.filter((filter) => filter).map((map) => {
    const info = {
      id: map.id,
      fullName: `${map.firstName} ${map.lastName}`,
      species: data.species.reduce((acc1, item1) => {
        if (map.responsibleFor.includes(item1.id)) { acc1.push(item1.name); return acc1; }
        return acc1;
      }, []),
      locations: data.species.reduce((acc, item) => {
        if (map.responsibleFor.includes(item.id)) { acc.push(item.location); return acc; }
        return acc;
      }, []),
    };
    return info;
  });
  return infoArray;
}

const retornaComID = (id) => {
  const infomacoesFunc = employees.filter((func) => func.id === id.id || func.firstName === id.name
  || func.lastName === id.name)
    .map((i) => {
      const infomacoesFuncProcurado = {
        id: i.id,
        fullName: `${i.firstName} ${i.lastName}`,
        species: data.species.reduce((acc, curr) => {
          if (i.responsibleFor.includes(curr.id)) { acc.push(curr.name); return acc; } return acc;
        }, []),
        locations: data.species.reduce((acc, cur) => {
          if (i.responsibleFor.includes(cur.id)) { acc.push(cur.location); return acc; } return acc;
        }, []),
      };
      return infomacoesFuncProcurado;
    });
  const obj = infomacoesFunc.reduce((acc, item) => item, {});
  return obj;
};
// console.log(retornaComID({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

function getEmployeesCoverage(param) {
  // seu código aqui
  if (param === undefined) return retornaTodasAsInformacoes();
  if (employees.find((idFunc) => idFunc.id === param.id)) return retornaComID(param);
  if (employees.find((firstName) => firstName.firstName === param.name)) return retornaComID(param);
  if (employees.find((lastName) => lastName.lastName === param.name)) return retornaComID(param);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
