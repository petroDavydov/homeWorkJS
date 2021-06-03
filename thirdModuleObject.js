//* Конспект 

// const hotel = {
// 	nameHotel: "Resort Hotel",
// 	stars: 5,
// 	capacity: 200,
// 	cost: 350
// };
// console.table(hotel);
// console.log(hotel.nameHotel);
// console.log(hotel.cost);
// console.log(hotel["stars"]);
// ---

// * создание пари если нет такого в обьекте;

// hotel.manager = "Chack Noris";
// hotel['security'] = "Van Dam";

// console.log(hotel.manager);
// console.log(hotel["security"]);

// =====================================

// *delete -оператор удаления
// delete hotel.cost //1 variant
// delete hotel['capacity'] // 2 variant
// console.log(hotel);

// =====================

// * shortHand properties

// let nameRest = 'Hotel California';
// let costRest = 1000;
// let placeRest = 'Ocean Beach';

// const restTeritory = {
// 	nameRest,
// 	costRest,
// 	placeRest,
// 	stars: 5,
// };

// console.table(restTeritory);

// =================

//* вичисляемие свойства

// const title = "BikersNik";
// const getBike = function () {

// 	return "myBike"
// };


// let bikers = {
// 	[title]: title,
// 	[getBike()]: getBike(),
// };

// console.table(bikers);

//=====================

//* методи обьекта

// const newYork = {
// 	city: 'New York',
// 	street: '1-st street',
// 	cars: 2500,
// 	house: 2000000000,
// 	air: '1.3cub/m',
// 	helloNewYork() {
// 		console.log('This is function');
// 	}
// };

// console.table(newYork);
// newYork.helloNewYork();

//*  this

// const hotelRom = {
// 	nameRom: "Rom Hotel",
// 	starsRom: 5,
// 	capacityRom: 100,
// 	showNameRom() {
// 		console.log(this.nameRom);
// 	},
// 	changeCapacityRom(value) {
// 		this.capacityRom = value;
// 	},
// }

// hotelRom.showNameRom();
// hotelRom.changeCapacityRom(500);
// console.log(hotelRom.capacityRom);

// ==========================

//*  цикл for...in


// const hotelSport = {
// 	nameSport: "Sport",
// 	nameCost: 250,
// 	nameStars: 5,
// 	nameCapacity: 300,
// };

// for (const key in hotelSport) {

// 	console.table('Hotel Sport key: ', key); //перебор ключей

// 	console.table('Hotel sport value: ', hotelSport[key]);// перебор значений
// };

// * Object.keys(), Object.values(), Object.entries()

// const hotelSport = {
// 	nameSport: "Sport",
// 	nameCost: 250,
// 	nameStars: 5,
// 	nameCapacity: 300,
// };

// const hotelSportKeys = Object.keys(hotelSport);
// console.log(hotelSportKeys);
// const hotelSportValue = Object.values(hotelSport);
// console.log(hotelSportValue);
// const hotelSportEntries = Object.entries(hotelSport);
// console.log(hotelSportEntries);

//* Object.keys() и цикл for...of

// const houseOfRisenSun = {
// 	namehouseOfRisenSun: 'House of Risen Sun',
// 	starshouseOfRisenSun: 10,
// 	costhouseOfRisenSun: 500,
// 	managerhouseOfRisenSun: 'Don Shymoda',

// };

// const keyshouseOfRisenSun = Object.keys(houseOfRisenSun);

// for (const keys of keyshouseOfRisenSun) {
// 	console.log('Value: ', houseOfRisenSun[keys]);
// };


//* можно использовать результат Object.entries()

// const cars = {
// 	carName: 'Nisan',
// 	while: 1,
// 	sit: 4,
// 	belt: 5,
// 	motor: 1,

// };


// const entriesCar = Object.entries(cars);

// for (const insideCar of entriesCar) {
// 	const keyCar = insideCar[0];
// 	const valueCar = insideCar[1];

// 	console.log(`${keyCar}: ${valueCar}`);
// };


//**Задача пример */

// const vegetables = {
// 	apple: 6,
// 	tomato: 10,
// 	cucamber: 15,
// 	popcorn: 30,
// 	potato: 35,
// 	meloan: 3,
// };

// const sumVegetables = Object.values(vegetables);
// console.log(sumVegetables);

// let vegTotal = 0;

// for (const itemVeg of sumVegetables) {
// 	vegTotal += itemVeg;
// };

// console.log(`Total vegetables: `, vegTotal, '- piece');

// ==============================


//* Операция spred & rest

// !Распиление аргументов

//найти самую маленькую температуру

// const temperature = [12, 2, 34, 5, 67, 123, 4];

// const minTemp = Math.min(...temperature);
// console.log(minTemp);

// const maxTemp = Math.max(...temperature);
// console.log(maxTemp);


//! Распиление масивов

// const movies = ['Rembo', 'Alience', 'Green Mile', 'Every Sunday', 'Joe Black'];

// const likeMovies = [...movies];
// console.log(likeMovies);

// const heros = ['IronMan', 'Doctor Doolit', 'Ninja', 'Robocop'];

// const allItem = [...heros, ...movies];
// console.log(allItem);


//? slice() в комбинации с операцией spread

// const sliceSpred = [...heros.slice(1, 3), ...movies.slice(-2)];
// console.log(sliceSpred);


//? Можно обновлять элементы не изменяя оригинальный массив, а создавая новый с обновленными значениями.

// const bed = ['pillow ', 'blanket ', 'mattress', 'night', ' light'];
// console.log(bed);

// const newPlaceForSleep = [
// 	...bed.slice(0, 2), // copy
// 	'Soft Toy', 'Bucket Rose', // add
// 	...bed.slice(2), // copy
// ];

// console.log(newPlaceForSleep);

//! Распиление обьектов

//Object.assign()

// const a = { x: 1, y: 2 };
// const b = { x: 4, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);

//* свойства распыляемого объекта могут перезаписать значение существующего свойства, если имена ключей совпадают, а распыление происходит после указания свойства.

// const q = { s: 1, d: 2 };
// const w = { s: 0, f: 3 };

// const m = { s: 5, j: 11, ...q, u: 21, ...w };
// console.log(m);  //{s: 0, j: 11, d: 2, u: 21, f: 3}

//* Задача на создание чтотокогото

// let man = { hasHands: true, hasHead: true, hasBody: false };
// let horse = { hasLegs: 4, hasTail: true, hasBody: true };

// const kentavr = { ...man, hasEyes: 2, ...horse};
// console.log(kentavr);

//!  Операция rest

// const add = function (...args) {
// 	console.log(args);
// };

// add(6, 7, 8);
// add(1, 2, 3, 4, 5)

// ======

//* Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// const add = function (value, name, ...args) {
// 	console.log(value);
// 	console.log(name);
// 	console.log(args);

// };

// add(10, 'one:', 1, 2, 3)
// add(15, 'two:', 1, 2, 3, 4, 5)

//! Деструктуризация

// const hotel = {
// 	name: "Hotel one",
// 	stars: 5,
// 	capacity: 100,
// };

// const { name = "Hotel two", stars = 5, status = "empty" } = hotel;
// console.log(name, stars, status); //Hotel one 5 empty


// const { name: hotelName, stars, status: HotelStatus = 'empty' } = hotel;
// console.log(hotel);//{name: "Hotel one", stars: 5, capacity: 100}
 

//*Используя операцию ... (rest) можно делать частичную деструктуризацию, взяв из объекта необходимые поля, а остальное собрать в переменную под именем rest (имя переменной произвольное), это будет объект с теми полями, которые мы явно не деструктуризировали в переменные.

// const { name, ...rest } = hotel;
// console.log(hotel);//{name: "Hotel one", stars: 5, capacity: 100}
// console.log(name);//Hotel one
// console.log(rest);//{stars: 5, capacity: 100}

//! Деструктуризация масивов

const rgba = [200, 255, 100];
// ======variant======
// let red, green, blue;
// [red, green, blue] = rgba;
// =====variant======
// const [red, green, blue] = rgba;

// =======varian more than in array======
const [red, green, blue, alfa = 0.3] = rgba;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} Alfa:${alfa}`);//Red: 200, Green: 255, Blue: 100 Alfa:0.3


// =======varian more than in array======

// const [red, green, blue] = rgba;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} `);//Red: 200, Green: 255, Blue: 100 
































































