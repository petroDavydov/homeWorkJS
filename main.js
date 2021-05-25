const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice);

// ============================


function multiply(x, y, z) {
	console.log("Код до return выполняется как обычно");

	// Возвращаем результат выражения умножения
	return x * y * z;

	console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

//   =======================================

function makeMessage(name, price) {
	// Change code below this line	
	const message = `You picked ${name}, price per item is ${price} credits`;
	// Change code above this line
	return (message);

};

makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

// ================================


function calculateTotalPrice(orderedQuantity, pricePerItem) {
	// Change code below this line
	const totalPrice = orderedQuantity * pricePerItem;

	// Change code above this line
	return (totalPrice);
};

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);


// ==========================


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
	// Change code below this line

	const totalPrice = orderedQuantity * pricePerDroid + deliveryFee

	const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

	// Change code above this line
	console.log(message);
};

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200)

// =======================


function isValidPassword(password) {
	const SAVED_PASSWORD = 'jqueryismyjam';
	// Change code below this line
	const isMatch = (password === SAVED_PASSWORD);

	// Change code above this line
	return (isMatch);
};

isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");


//   ==================================


function checkStorage(available, ordered) {
	let message;
	// Change code below this line
	if (ordered > available) {
		message = `Not enough goods in stock!`

	} else {
		message = `Order is processed, our manager will contact you.`
	}

	// Change code above this line
	console.log(message);
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);



// ========18=========


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
	let message;
	// Change code below this line
	let totalPrice = pricePerDroid * orderedQuantity;

	if (totalPrice > customerCredits) {

		message = "Insufficient funds!";

	} else {

		totalPrice = customerCredits - totalPrice


		message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;

	}

	// Change code above this line
	console.log(message);
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);


// ==========

