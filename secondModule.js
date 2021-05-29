// Массивы
// Присвоение по ссылке и по значению
// Методы массива
// Функции
// Область видимости
// Стрелочные функции
// ===================

// const clients = ['Mango', 'Poly', 'Ajax', 'pOly', 'POLY', 'pOlY'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
// 	/*
// 	 * На каждой итерации мы будем проверять совпадает ли элемент массива с
// 	 * именем клиента. Если совпадает то мы записываем в message сообщение
// 	 * об успехе и делаем break чтобы не искать дальше
// 	 */

// 	if (client === clientNameToFind) {
// 		message = `Клиент с  именем ${clientNameToFind} есть в базе данных!`;
// 		break;
// 	}

// 	// Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
// 	message = `Клиента с именем  ${clientNameToFind} нету в базе данных!`;
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// ========================

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
  ];
  let total = 0;
  
  for (let i = 0; i < matrix.length; i += 1) {
	console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
  
	for (let j = 0; j < matrix[i].length; j += 1) {
	  console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
	  total += matrix[i][j];
	}
  }
  
  console.log(total); // 45


//   =============

// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}

//   =========splice()==============


let scores = [1,2,3,4,5];
let dom = [1,2,3,4,5,6,7];

console.log(scores);
console.log(dom);


let deleteSplice = scores.splice(2,4);
let deleteSpliceTwo = dom.splice(0,3);

console.table(deleteSplice);
console.table(deleteSpliceTwo);


// ================вставка с помощью splice()


const colors =['green', 'yellow', 'black'];

console.log(colors);

colors.splice(2,0, 'pink', 'purpule', 'same');

console.table(colors);

// ========concat()====================

const buyers = ['one', 'two', 'three', 'four'];
const selers =['den', 'petro', 'ura','gleb'];

const allClients = buyers.concat(selers);

console.log(allClients);
console.log(buyers);
console.log(selers);

// ====================




































