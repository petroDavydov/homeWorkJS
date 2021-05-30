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

// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
// 	console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

// 	for (let j = 0; j < matrix[i].length; j += 1) {
// 		console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
// 		total += matrix[i][j];
// 	}
// }

// console.log(total); // 45


//   =============

// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
// 	console.log('It is a red fruit!');
// }

//   =========splice()==============


// let scores = [1, 2, 3, 4, 5];
// let dom = [1, 2, 3, 4, 5, 6, 7];

// console.log(scores);
// console.log(dom);


// let deleteSplice = scores.splice(2, 4);
// let deleteSpliceTwo = dom.splice(0, 3);

// console.table(deleteSplice);
// console.table(deleteSpliceTwo);


// ================вставка с помощью splice()


// const colors = ['green', 'yellow', 'black'];

// console.log(colors);

// colors.splice(2, 0, 'pink', 'purpule', 'same');

// console.table(colors);

// ========concat()====================

// const buyers = ['one', 'two', 'three', 'four'];
// const selers = ['den', 'petro', 'ura', 'gleb'];

// const allClients = buyers.concat(selers);

// console.log(allClients);
// console.log(buyers);
// console.log(selers);

// ====================


// const count = function (from, to, step) {
// 	console.log(`count from ${from} to ${to} step ${step} `);

// 	for (let j = from; j <= to; j += step) {
// 		console.log(j)

// 	}
// }

// count(0, 10, 5);
// count(undefined, 4, 2);
// count(2,6,1);
// count(1,20, 1);


// ========arguments=====================

// const sum = function () {

// 	total = 0;

// 	for (let argument of arguments) {
// 		total += argument
// 	};

// 	return total;
// }


// console.log(sum(2, 2, 2))
// console.log(sum(3, 4, 3))
// console.log(sum(5, 5, 10))


// =========преобразование псевдомасива=========


// const fun = function(...args){
// args = Array.from(arguments);

// console.log(args)

// }


// ==================

// const takeMoney = function (salary, balance) {
// 	if (salary === 0) {
// 		console.log(`Enter sum more then ${salary}`);
// 	} else if (salary > balance) {
// 		console.log(`Sorry but ${salary} too big, now no money :( `);
// 	} else {
// 		console.log(`Take yor money`);
// 	}
// };

// takeMoney(0, 300);
// takeMoney(1000, 300);
// takeMoney(300, 1000);


// ===


// const withdrow = function (amount, fritter) {

// 	if (amount === 0) {
// 		console.log(`Enter sum more ${amount}`);
// 		return;
// 	}

// 	if (amount > fritter) {
// 		console.log(`Sorry ${amount} hasn't at the moment no such money inside`);
// 		return
// 	}

// 	console.log(`OK!`);

// }

// withdrow(0, 300);
// withdrow(500, 300);
// withdrow(100, 300);

// =======function declaration========


// addd(1, 2, 3); // 6
// print('text'); // text

// function addd(a, b, c) {
// 	return a + b + c;
// }


// function print(str) {
// 	console.log(str);
// }

// ========arrow function==============

// const asd = (...args) => {
// 	console.log(args)
// }

// asd(1, 4, 5, 6, 7)

// ===============VIDEO LECTION=======

// const cartos = [54, 28, 105, 70, 92, 17, 120];
// let totalos = 0;

// for (let i = 0; i < cartos.length; i += 1) {
// 	console.log(cartos[i]);
// 	totalos += cartos[i];
// }

// console.log("Totalos: ", totalos)

// = 2 variant== 

// for (const carto of cartos) {
// 	totalos += carto
// }
// console.log("Totalos: ", totalos)
// ===========================

// сложить четние числа в масиве

// const numbers = [54, 28, 105, 70, 92, 17, 120, 13, 17, 23];
// let total = 0;
// let totalMinus = 0;
// for (let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]); 

// if (numbers[i] % 2 === 0) {
// 	console.log('Четное!!!')

// 	total += numbers[i];

// }else if(numbers[i] % 2 !==0){
// 	console.log(('НЕ четное'))

// 	totalMinus+= numbers[i]
// }
// }

// for (let number of numbers) {
// 	console.log(number)
// if (number % 2 === 0) {
// 	console.log(`${number} - четное`)
// 	total += number
// }

// if (number % 2 !== 0) {
// 	console.log(`Continue, move next:  ${number}`);
// 	totalMinus += number
// 	continue;
// }
// console.log(`${number} - четное`)
// total += number
// };
// console.log(`Total: ${total}`)
// console.log("Total minus: ", totalMinus)


// ======================

// Написать скрипт поиска ЛОГИНА

// #1

// const logins = ['asgsdb', 'adfgty56', 'drgtrhy78', 'jfjdkdiw9556ejxnck'];
// const loginToFind = 'adfgty56';
// let message;

// for (let i = 0; i < logins.length; i += 1) {

// 	const login = logins[i]

// console.log('Login: ', login)

// console.log(`${login}===${loginToFind}: `, login===loginToFind)


// 	if (login === loginToFind) {
// message = `User ${loginToFind} is here`;
// 		break;
// 	}

// }

// console.log(message);


// #2

// for (const login of logins) {

// 	console.log('Login: ', login);
// 	console.log(`${login}===${loginToFind}: `, login === loginToFind)

// 	if (login === loginToFind) {

// 		message = `User ${loginToFind} is here`;
// 		console.log('EQUAL!!!');
// 		break;
// 	}
// }

// #3


// console.log(logins.includes(loginToFind) || logins.includes(';dfng;lsdfnv') );

// #4

// let message = logins.includes(loginToFind)
// "?" `User ${loginToFind} is here!`
// 	: `We can't find this user.`;

// console.log(message)

/*===============
================
================*/

//  нахождение самого маленького числа в массиве, при условии что они не повторяються

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smolestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number)

// 	if (number < smolestNumber) {
// 		smolestNumber = number
// 	}
// }

// console.log(`Smolest Number: -${smolestNumber}-`);


// =наибольшее число, как дз
// const numbersBig = [51, 18, 13, 24, 7, 85, 19];

// let bigestNumber = numbers[0];

// for (const number of numbers) {
// 	// console.log(number)

// 	if (number > bigestNumber) {
// 		bigestNumber = number
// 	}
// }

// console.log(`Smolest Number: -${bigestNumber}-`);

// ==================

// Напишите скрипт которий обьединяет все єлементи масива в одно строковое значение

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (let friend of friends) {
// 	string += friend + ', ';
// }

// string = string.slice(0, string.length - 2)

// const string = friends.join(", ")

// console.log(string);

// ============================

// Изменить регистр на противоположний

// const string = 'JavaScript';
// const letters = string.split('');
// let invertString ='';


// console.log(letters)

// for (const letter of letters){
// 	console.log(letter);

// 	if(letter === letter.toLocaleLowerCase()){
// 		console.log('To Lower Case - ', letter)

// 		invertString += letter.toUpperCase()
// 	}else{
// 		invertString += letter.toLocaleLowerCase()
// 	};
// }

// console.log('invertString: ', invertString)

// =ternarnik=

const string = 'JavaScript';
const letters = string.split('');
let invertString = '';

console.log(letters);

for (const letter of letters) {
	console.log(letter);

	const isEqual = letter === letter.toLocaleLowerCase();

	invertString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
}

console.log('invertString: ', invertString);

// ===============

























































































