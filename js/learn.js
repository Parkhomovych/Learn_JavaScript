// <=============================================================================>

// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).

// const pens = false;
// const stud = true;
// const age = 33;
// let discount = false;
// if (pens || stud ||  (age >= 12 && age <= 18)) {
//     discount = true;
// }

// console.log(discount);

// <=============================================================================>

// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

// const age = 12;
// const rights = true;
// let result = false;
// if (age >= 18 && rights) {
//     result = true;

// }
// console.log(result);

// <=============================================================================>

// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

// const keyFrend = false;
// const hasKey = false;
// const isCloseDoor = true;
// let canOpenDoor = false;
// if (keyFrend || hasKey || !isCloseDoor) {
//     canOpenDoor = true;
// }
// console.log(canOpenDoor);

// <=============================================================================>

// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt("Введіть число");
// console.log(answer);
// const numbValue = Number(answer);
// console.log(numbValue);
// if (isNaN(numbValue)) { alert("Невалідне значення") }
// else {
//     const sqNumb = Math.pow(numbValue, 2)
//     alert(`Результат обчислень ${sqNumb} `)
// }

// <=============================================================================>

// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Введіть рядок буз символа "$"');
// if (Number(answer)) {
//     console.log("Невірний ввід");
// }else if (typeof answer === 'string' && !answer.includes('$') ) {
//     console.log(`Довжина рядка ${answer.length}`);
// } else {
//     console.log("Невірний ввід");
// }

// <=============================================================================>

// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt(`Введіть число`);
// const message = answer % 2 === 0 ? alert(`число парне`) : alert('число не парне');

// <=============================================================================>

//3. Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 50;
// const min = 23;

// for (let i = max; i > min; i--) {
//     if (i % 2 === 0) {
//         console.log(`Парне ${i}`);

//     } else {
//         console.log(`не парне ${i}`);
//     }
// }

// <=============================================================================>

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль.

// const ADMIN_PASSWORD = 'dfghjjkllop';
// let userPassword;
// do {
//    userPassword = prompt("Ввведіть пароль");
// } while (userPassword !== ADMIN_PASSWORD)
// console.log("Ви ввели вірний пароль");

// <=============================================================================>

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// let number;
// do {
//     number = prompt("Введи число більше за 10")
// } while (number < 10);
// console.log("Харош");

// <=============================================================================>

// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

// const minute = 70;
// const minuteCorrect = String(minute % 60).padStart(2, 0);
// const hour = String(Math.floor(minute / 60)).padStart(2, 0);
// const resuls = `${hour}:${minuteCorrect}`
// console.log(resuls);

// <=============================================================================>

// Напиши функцію calculateTotal(number), яка приймає ціле число
// (параметр number) і повертає суму всіх цілих чисел від одиниці
//  і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// let number = 5;
// let total = 0;

// for (let i = 1; i <= number; i++) {
//     total += i;
// }

// console.log(total);

// <=============================================================================>

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order; i++) {

//     }
//     // Change code above this line
//     return total;
// }
// let order = [12, 85, 37, 4];
// let total = 0;
// for (let i = 0; i < order.length; i+= 1) {
// total = total + order[i]

// }
// console.log(total);

// <=============================================================================>

// Напиши функцію findLongestWord(string), яка приймає довільний рядок,
// що складається тільки зі слів, розділених пробілом(параметр string),
// і повертає найдовше слово в цьому рядку.

// let string = 'The quick brown fox jumped over the lazy dog';
//     let words = string.split(' ');
//     let longestWord = "";

//     for (let i = 0; i < words.length; i+=1) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

// console.log(longestWord);

// <=============================================================================>

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// const min = 10;
// const max = 17;
// let result = 0
// const numbers = [];
// numbers.push(min)

// for (let i = 1; i < (max - min); i += 1){
//     result = min + i
//     numbers.push(result)

// }
// numbers.push(max)
// console.log(numbers);

// АБО

// function createArrayOfNumbers(min, max) {
//   var numbers = [];
//   for (var i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// <=============================================================================>

// Напиши функцію filterArray(numbers, value), яка приймає масив
// чисел(параметр numbers) і повертає новий масив, в якому будуть
//  тільки ті елементи масиву numbers, які більші за значення
//   параметра value(число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// const numbers = [12, 24, 8, 41, 76];
// const value = 38;
// const result = [];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//         result.push(numbers[i])
//     }
// }
// console.log(result);

// const numbers = [12, 24, 8, 41, 76];
// const value = 38;
// const filteredNumbers = [];

// for (const variable of numbers) {
//     if (variable > value) {
//         filteredNumbers.push(variable)
//     }
// }

// <=============================================================================>

// const arr1 = [1, 2, 3];
// const arr2 =  [10, 20, 30];
// const result = [];

// for (let j = 0; j < arr2.length; j += 1){

//     if ( arr1.includes(arr2[j])) {
//     result.push(arr2[j])
//     }
// }

// console.log(result);

// <=============================================================================>

// const order = [12, 85, 37, 4];
// let total = 0;

//   for (const variable of order){
//    total = variable + total
// }
// console.log(total);

// <=============================================================================>

// Напиши функцію getEvenNumbers(start, end),
// яка повертає масив усіх парних чисел  від start до end.
// Парним вважається число,
// яке ділиться на 2 без остачі(10 % 2 === 0).
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []

// const start = 6;
// const end = 12;
// const arr = []
// for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0  ) {
//         arr.push(i)
//     }
// }
// console.log(arr);

// <=============================================================================>

// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true,
// якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes()
// не можна використовувати метод масив.includes(значення).
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false

// const array = [1, 2, 3, 4, 5];
// const value = 3;
// let result;
// for (let i = 0; i < array.length; i += 1){
//     if (array[i] === value ) {
//         result = true
//         break;
//     } else {
//         result = false
//     }
// }
//  console.log(result);

// <=============================================================================>

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];
// // Change code above this line
// console.log(lastTag);

// <=============================================================================>

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//       likes: 1308,

//   },
// };

// const user2 = Object.create(user)
// console.log(user);
// console.log(user2);

// <=============================================================================>

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// }

// console.log(credentials);

// <=============================================================================>

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);

// }
// console.log(keys);
// console.log(values);

// <=============================================================================>

// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//    if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//       values.push(apartment[key]);
//     }

// }

// <=============================================================================>

// Напиши функцію countProps(object), яка рахує і повертає
// кількість власних властивостей об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості
// властивостей об'єкта.
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//   let propCount = 0;
//     // const keys = Object.keys(object);
//     // const result = keys.length
//     // console.log(result);

//     propCount = Object.keys(object).length;
//   return propCount;
// }
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// <=============================================================================>

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// let values = [];

// const keys = Object.keys(apartment);;
// console.log(keys);

// for (const value of keys) {
//    values.push(apartment[value])
// }
// console.log(values);

// <=============================================================================>

// Виконай рефакторинг функції countProps(object),
// використовуючи метод Object.keys() і, можливо,
// але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   return propCount;
// Change code above this line
// }

// <=============================================================================>

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
//  де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
//   Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//    Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const key of Object.values(salaries)) {
// totalSalary+= key

//   }

//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// <=============================================================================>

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

// <=============================================================================>

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products
// і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений,
//  функція повинна повертати null.

// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const product of products) {
//     if (product.name === prodactName) {
//       return product.price
//     }
//   }
//  return null
// }
// console.log(getProductPrice("Scanner"));

// <=============================================================================>

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let values = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// <=============================================================================>

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length <= maxLength) {
//   result = message
// }else
//   result = message.slice(0, maxLength) + '...'
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// <=============================================================================>

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {
//     let totalPrice = 0
//     for (const product of products) {
//       if (product.name.includes(productName)) {
//         totalPrice = product.price *product.quantity;
//       }
//     }
//     return totalPrice
//   }
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Blaster"));
// <=============================================================================>

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// <=============================================================================>

// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function qwerty (arr1, arr2){

// if(arr1.length !== arr2.length){
//   return false
// }

// for (const element of arr1){
//   if(!arr2.includes(element)){
//   return false
//   }
//   return true
// }

// }
// console.log(qwerty(arr1, arr2))
// console.log(qwerty(arr3, arr4))
// console.log(qwerty(arr5, arr6))
// console.log(qwerty(arr7, arr8))

// <=============================================================================>

// function findMatches(firstNumb, ...args) {
//   const matches = []; // Don't change this line
// for(const arg of args){
//   if(firstNumb.includes(arg)){
//     matches.push(arg);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// <=============================================================================>

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки
//  за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>",
// де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>",
// де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   }
//   // Change code above this line
// };

// <=============================================================================>

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName)
//
//   },
// };

// <=============================================================================>

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1)
//
//   },
// };

// <=============================================================================>

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName,onSuccess,onError) {
//     for (const pizza of this.pizzas){
//       if(pizza === pizzaName){
//        return onSuccess(pizzaName)

//       }

//     }
//     return onError(pizzaName)
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// <=============================================================================>
// const arr1 =[1,2];
// const arr2 = [3,4];
// const arr3 = [5,6];
// const totalArr = [...arr1, ...arr2, ...arr3]

// arr1.splice(0,1)

// console.log(arr1);
// console.log(totalArr);
// <=============================================================================>
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.sort();

// console.log(...scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// const scores = [1, 22, 3, 44, 5, 66];
// const ascendingScores = [...scores].sort();

// console.log('scores', scores);
// console.log('ascendingScores', ascendingScores);

// <=============================================================================>
// function changeEven(...numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }
// function changeEven(numbers, value) {
//   const newArr = [];
//  numbers.forEach(number => {
//   if (number % 2 === 0) {
//     number += value
//   }
//   newArr.push(number)
  
//  })
// }
// changeEven([1, 2, 3, 4, 5], 10);
// // <=============================================================================>
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((element, index, array) => element.length)

// const planetsLengths = []
// planets.map((element, idx) => planetsLengths.push(idx + 1))
// console.log(planetsLengths);
// <=============================================================================>
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const getFriends = (users) => {
//   const usersFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = usersFriends.filter((friend, index, arr) => arr.indexOf(friend) === index);
//   return uniqueFriends;
// };
// console.log(getFriends(users));
// const getUsersWithFriend = (users, friendName) => {
//   const filteredUsers = users.filter(user => user.friends.includes(friendName));
//   return filteredUsers;
// };
// console.log(getUsersWithFriend(users, "Sharron Pace"));

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(elem => elem.age > minAge && elem.age < maxAge)
//   };
//   console.log(getUsersWithAge(users,20,30));
// <=============================================================================>
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players);
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, numb) => total += numb );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// <=============================================================================>
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, elem) => total +=(elem.playtime / elem.gamesPlayed),0);
// console.log(totalAveragePlaytimePerGame);
// <=============================================================================>
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalFriendCount = users => users.reduce((total,{friends}) => total += friends.length , 0)
// console.log(getTotalFriendCount(users));
// <=============================================================================>
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line


// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort()
// console.log(releaseDates);
// <=============================================================================>
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((first,second) => first.author.localeCompare(second.author));

// const sortedByReversedAuthorName = [...books].sort((first,second) => second.author.localeCompare(first.author));

// // const sortedByAscendingRating = [...books].sort((first,second) => first.rating - second.rating);

// // const sortedByDescentingRating = [...books].sort((first,second) => second.rating - first.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// // console.log(sortedByAscendingRating);
// // console.log(sortedByDescentingRating);
// <=============================================================================>
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .sort((a,b) => a.author.localeCompare(b.author))
//   .filter(({rating}) => rating > MIN_BOOK_RATING)
//   .map(elem => elem.author)
  
// console.log(names);
// <=============================================================================>
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// щоб вона повертала загальний баланс користувачів (властивість balance),
// стать яких (властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
const getTotalBalanceByGender = (users, gender) => [...users]
  .filter(elem => elem.gender === gender)
  .reduce((total,elem) => total += elem.balance,0)
 
  console.log(getTotalBalanceByGender(users,'male'));
// const male =[];
// const female = [];
// users.forEach(elem => elem.gender.includes('female') ? male.push(elem) :  female.push(elem));
// const totalBalanceMale = male.reduce((total,elem) => total += elem.balance,0)
// const totalBalanceFemale = female.reduce((total,elem) => total += elem.balance,0)

// console.log(female);
// console.log(male);
// console.log(totalBalanceMale);
// console.log(totalBalanceFemale);
// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>

// <=============================================================================>
