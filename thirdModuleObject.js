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

// const rgba = [200, 255, 100];
// ======variant======
// let red, green, blue;
// [red, green, blue] = rgba;
// =====variant======
// const [red, green, blue] = rgba;

// =======varian more than in array======
// const [red, green, blue, alfa = 0.3] = rgba;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} Alfa:${alfa}`);//Red: 200, Green: 255, Blue: 100 Alfa:0.3

// =======varian more than in array======

// const [red, green, blue] = rgba;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue} `);//Red: 200, Green: 255, Blue: 100

// ================

//!...rest

//*деструктуризировать только первые n элементов, а остальные сохранить в одну переменную в виде массива.

// const rgb = [200, 225, 100];
// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);

//* Допустим, из массива rgb необходимо взять только последнее значение.

// const rgb = [200, 255, 100];
// const [, , blue] = rgb;

// console.log(`Blue ${rgb}`);

// ================================================================================================================================================================================================================================================================================================================================================================================================================

//! Видео Лекции Репети

// let green = 200;
// let blue = 300;
// let yellow = 400;

// let color = [250, 350, 450];
// [green, blue] = color;

// console.log(`G: ${green} B: ${blue} Y: ${yellow}`);

// let pictures = [100, 200, 477];

// const [, , number477] = pictures;
// console.log(`Pictures : ${number477}`);

//! Вичисляемое свойство

// let inputName = 'color';
// let color = 'tomato';
// let pictures = 'square';
// let author = 'Salvador Dali';

// let colorPickerName = {
// 	[inputName]: color,
// 	[author]: pictures,
// }

// console.table(colorPickerName);

//! МЕТОДИ
//Method getName

// const playList = {
// 	name: "My super List",
// 	rating: 5,
// 	track: ['track-1', 'track-2', 'track-3'],
// 	trackCount: 3,
// 	// getName: function () {
// 	// 	console.log('Hello this is Method getName!');// oldSchool

// 	// },
// 	getName() {
// 		console.log('Hello this is Method getName!');

// 	},
// };

// playList.getName();

// * == method=

// const playList = {
//   name: "My super List",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   changeName(newName) {
//     console.log("This inside changeName!", this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playList.getTrackCount()); // 1 визов
// playList.changeName("New name-1");
// playList.addTrack("new track-4");
// console.log(playList.getTrackCount());
// playList.addTrack("new track-5"); // 2 визов
// playList.updateRating(8);
// playList.getTrackCount(); //3 визов внутри обьекта

//! Перебор

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// let totalFeedBack = 0;

//* Object.keys() -> масив с ключами

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);

//   console.log(feedback[key]);

//   totalFeedBack += feedback[key];
// }

// console.log("Total Feedback: ", totalFeedBack);

//* object.value()-> масив значений

// const values = Object.values(feedback);
// console.log(values);

// let totalFeedBack = 0;

// for (const value of values) {
//   console.log(value);

//   totalFeedBack += value;
// }

// console.log("Total Feedback: ", totalFeedBack);

// ================

//!  Работа с коллекцией(масив обьектов)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.log(friends);

// for (let friend of friends) {
// 	// console.log(friend);
// 	// console.table(friend.name);
// 	console.table(friend.online);

// 	friend.newprop = 555;
// }

// console.table(friends);

//! поиск друга по имени

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     // console.log(friend.name);
//     console.log(friend.name);

//     if (friend.name === friendName) {
//       return " Find our Friend!!!";
//     }
//   }
//   return "Unfortunately we can't find such friend";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chalsy"));

//! получить все имена друзей

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {};

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }
//   //   console.log(names);
//   return names;
// };

// // console.log(getAllNames(friends));
// console.log(getAllNames(friends));

//! Получить всех друзей online

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOnLineFriends = (allFriends) => {
//   const onLineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onLineFriends.push(friend);
// 	  };
//   }
//   return onLineFriends;
// };

// console.table(getOnLineFriends(friends));

//! Получить всех друзей offline

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getOffLineFriends = (allFriends) => {
//   const offLineFriends = [];

//   for (let friend of allFriends) {
//     if (!friend.online) {               // "!" не равно
//       offLineFriends.push(friend);
//     }
//   }
//   return offLineFriends;
// };

// console.log(getOffLineFriends(friends));

//! Создать 2 обьекта , если online  о пушить в 1 , offline -2

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: false },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Oreo", online: true },
//   { name: "ALamp", online: false },
//   { name: "Joker", online: true },
// ];

// const getFriendsByOnlineStatus = (allFriends) => {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     // console.log(friend);
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//*Задача : КОЛИЧЕСТВО СВОЙСТВ В ОБЬЕКТЕ

const x = {
	a: 1,
	b: 2,
	c: 43,
	d: 56,
	
};
  console.log(Object.keys(x));
  console.log(Object.keys(x).length);