
// Задание-5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  let arrProp = []
    for(const product of arr){
      if(product[prop]){
        arrProp.push(product[prop])
      }
    }
    return arrProp
};

console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'quantity')); 
console.log(getAllPropValues(products, 'category')); 
