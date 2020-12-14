
 // Задача-3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function(employees) {

  const employeeName = Object.keys(employees);
  let bestEmployee = employeeName[0]
  for(const key of employeeName)
  if (employees[key] > employees[bestEmployee]){
    bestEmployee = key
  }
  return bestEmployee

};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); 
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); 
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
