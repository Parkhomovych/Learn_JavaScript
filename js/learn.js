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

// <===========================================================================================================================>


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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt(`Введіть число`);
// const message = answer % 2 === 0 ? alert(`число парне`) : alert('число не парне');

// <===========================================================================================================================>

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

// <===========================================================================================================================>

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль.

// const ADMIN_PASSWORD = 'dfghjjkllop';
// let userPassword;
// do {
//    userPassword = prompt("Ввведіть пароль");
// } while (userPassword !== ADMIN_PASSWORD)
// console.log("Ви ввели вірний пароль");

// <===========================================================================================================================>

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// let number;
// do {
//     number = prompt("Введи число більше за 10")
// } while (number < 10);
// console.log("Харош");

// <===========================================================================================================================>

// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

// const minute = 70;
// const minuteCorrect = String(minute % 60).padStart(2, 0);
// const hour = String(Math.floor(minute / 60)).padStart(2, 0);
// const resuls = `${hour}:${minuteCorrect}`
// console.log(resuls);

// <===========================================================================================================================>


// Напиши функцію calculateTotal(number), яка приймає ціле число
// (параметр number) і повертає суму всіх цілих чисел від одиниці
//  і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// let number = 5;
// let total = 0;

// for (let i = 1; i <= number; i++) {
//     total += i;
// }

// console.log(total);

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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


// <===========================================================================================================================>

// const arr1 = [1, 2, 3];
// const arr2 =  [10, 20, 30];
// const result = [];

// for (let j = 0; j < arr2.length; j += 1){

//     if ( arr1.includes(arr2[j])) {
//     result.push(arr2[j])
//     }
// }

// console.log(result);

// <===========================================================================================================================>

// const order = [12, 85, 37, 4];
// let total = 0;
 

//   for (const variable of order){
//    total = variable + total
// }
// console.log(total);

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// }

// console.log(credentials);

// <===========================================================================================================================>

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

// <===========================================================================================================================>

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


// <===========================================================================================================================>

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

// <===========================================================================================================================>

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

// <===========================================================================================================================>

// Виконай рефакторинг функції countProps(object),
// використовуючи метод Object.keys() і, можливо,
// але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>

// <===========================================================================================================================>