//* Array.prototype.filter() - это метод массива, который скрывает в себе логику перебора коллекции и вызывает callback-функцию, которую мы ему передаем для каждого элемента, возвращая массив элементов, подошедших под критерий.

// ==MDN==
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);

// // console.log(words);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// ==MDN==

//! =Conspect=
// Императивный подход
// const numbersImp = [1, 2, 3, 4, 5];
// const filteredNumbersImp = [];

// for (let i = 0; i < numbersImp.length; i += 1) {
//   if (numbersImp[i] > 2) {
//     filteredNumbersImp.push(numbersImp[i]);
//   }
// }

// console.log(filteredNumbersImp); // [4, 5]

// // Декларативный подход
// const numbersDec = [1, 2, 3, 4, 5];
// const filteredNumbersDec = numbersDec.filter((value) => {
//   return value > 3;
// });

// console.log(filteredNumbersDec); // [4, 5]

// ! Clean function
//* Dirty Function
// const dirtyValue = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyValue(numbers, 2);

// console.log(numbers);

//* Clean Function

// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubleNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubleNumbers);


// ! ПЕРЕБЕРАЮЩИЕ МЕТОДИ МАСИВА






















