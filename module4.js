//*Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
// 	return 'Ваша пицца готовится, ожидайте.';
//   }
//   // Пиши код ниже этой строки

//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);


//*Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.


function deliverPizza(pizzaName) {
	return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza(pizzaName) {
	return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName,callback) {
  
	return callback(pizzaName);;
  }
  
console.log(deliverPizza("Acrobat"));
console.log(makePizza("Mango"));