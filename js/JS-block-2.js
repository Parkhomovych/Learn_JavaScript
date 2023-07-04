// // 1 <=============================================================================>
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// // 2 <=============================================================================>
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
//   // Change code above this line
// }

// // 3 <=============================================================================>
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// // 4 <=============================================================================>
// // Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // 5 <=============================================================================>
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// // Change code below this line

// // 6 <=============================================================================>
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // Write your code under this line

// // 7 <=============================================================================>
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// // Change code below this line

// // 8 <=============================================================================>
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line

// // 9 <=============================================================================>
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

// // 10 <=============================================================================>
// function splitMessage(message, delimiter) {
//   if (delimiter === '') {
//     return message.split('');
//   } else {
//     return message.split(delimiter);
//   }
// }

// // 11 <=============================================================================>
// function calculateEngravingPrice(message, pricePerWord) {
//   let words = message.split(' ');
//   let wordCount = words.length;
//   let totalPrice = wordCount * pricePerWord;

//   return totalPrice;
// }
// // 12 <=============================================================================>
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// // 13 <=============================================================================>
// function slugify(title) {
//   // Change code below this line
//   let titleLower = title.toLowerCase();
//   titleLower = titleLower.split(' ');
//   let space = '-';
//   titleLower = titleLower.join(space);

//   return titleLower;

//   // Change code above this line
// }
// // 14 <=============================================================================>
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// // 15 <=============================================================================>
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// // 16 <=============================================================================>
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let allArray = firstArray.concat(secondArray);
//   let numberArray = allArray.length;

//   if (numberArray > maxLength) {
//     return allArray.slice(0, maxLength);
//   } else {
//     return allArray;
//   }
//   // Change code above this line
// }
// // 17 <=============================================================================>
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// // 18 <=============================================================================>
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;

//   // Change code above this line
// }
// // 19 <=============================================================================>
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// // 20 <=============================================================================>
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i++) {
//     total = total + order[i];
//   }
//   // Change code above this line
//   return total;
// }

// // 21 <=============================================================================>
// function findLongestWord(string) {
//   let words = string.split(' ');
//   let longestWord = '';

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }
// // 22 <=============================================================================>
// function createArrayOfNumbers(min, max) {
//   var numbers = [];
//   for (var i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// // 23 <=============================================================================>
// function filterArray(numbers, value) {
//   // Change code below this line

//   const result = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;

//   // Change code above this line
// }
// // 24 <=============================================================================>
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

// // 25 <=============================================================================>
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const result = [];

//   for (let j = 0; j < array1.length; j += 1) {
//     if (array2.includes(array1[j])) {
//       result.push(array1[j]);
//     }
//   }
//   return result;
//   // Change code above this line
// }
// // 26 <=============================================================================>
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const variable of order) {
//     total = variable + total;
//   }

//   // Change code above this line
//   return total;
// }

// // 27 <=============================================================================>
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const variable of numbers) {
//     if (variable > value) {
//       filteredNumbers.push(variable);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// // 28 <=============================================================================>
// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// // 29 <=============================================================================>
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// // 30 <=============================================================================>
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// // 31 <=============================================================================>
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }
// // 32 <=============================================================================>
// function includes(array, value) {
//   // Change code below this line
//   let result;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   return result;
//   // Change code above this line
// }
