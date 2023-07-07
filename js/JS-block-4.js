// 1 <=============================================================================>
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// 2 <=============================================================================>
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName)
  
// }
// console.log(makeMessage("Royal Grand", makePizza));
// 3 <=============================================================================>
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     `Eating pizza ${pizzaName}`
//   })
// 4 <=============================================================================>
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//       for (pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName)
//       }
//     }
//         return onOrderError (`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);
  
// // 5 <=============================================================================>
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     orderedItems.forEach((element) => totalPrice += element)
  
//     // Change code above this line
//     return totalPrice;
//   }
  
// 6 <=============================================================================>
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//   numbers.forEach((number) => {
//      if (number > value) {
//         filteredNumbers.push(number);
//       }
//   })
    
  
//     // Change code above this line
//     return filteredNumbers;
//   }
  
// 7 <=============================================================================>
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
//   firstArray.forEach((arr) => {
//      if (secondArray.includes(arr)) {
//         commonElements.push(arr);
//       }
//   })
  
//     return commonElements;
//     // Change code above this line
//   }
  
// 8 <=============================================================================>
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;
// // Change code above this line

// // 9 <=============================================================================>
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => totalPrice += item);
//     return totalPrice
//   }
//   // Change code above this line
  
// 10 <=============================================================================>
// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
  
// 11 <=============================================================================>
// Change code below this line
// const getCommonElements =(firstArray, secondArray) =>{
//     const commonElements = [];
  
//     firstArray.forEach( element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }
  
// 12 <=============================================================================>
// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         newArr.push(numbers[i] + value);
//       } else {
//         newArr.push(numbers[i]);
//       }
//     }
//     return newArr;
//     // Change code above this line
//   }
// 13 <=============================================================================>
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((element, index, array) => element.length)

// 14 <=============================================================================>
// const planetsLengths = planets.map((element, index, array) => element.length)
// 15 <=============================================================================>
// const titles = books.map( ({title}) => title);
// 16 <=============================================================================>
// const genres = books.flatMap(({genres}) => genres);
// 17 <=============================================================================>
// const getUserNames = users => {
//     const names = users.map(elem => elem.name)
//    return names
//      };
// // 18 <=============================================================================>
// const getUserEmails = users => {
    
//     return users.map(elem => elem.email)
//       };
// // 19 <=============================================================================>
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(even => even%2 === 0)
// const oddNumbers = numbers.filter(odd => odd %2 !== 0)
// // 20 <=============================================================================>
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   const allGenres = books.flatMap(all => all.genres );
//   const uniqueGenres = allGenres.filter((unique, idx, arr) => arr.indexOf(unique) === idx);
// // 21 <=============================================================================>
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter(top => top.rating > MIN_RATING);
//   const booksByAuthor = books.filter(elem => elem.author === AUTHOR );
  
// // 22 <=============================================================================>
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(elem => elem.eyeColor === color)
    
//     };
//     // Change code above this line
// // 23 <=============================================================================>
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(elem => elem.age > minAge && elem.age < maxAge)
     
//     };
//     // Change code above this line
// // 24 <=============================================================================>
// const getUsersWithFriend = (users, friendName) => {
//     const filteredUsers = users.filter(user => user.friends.includes(friendName));
//     return filteredUsers;
//   };
// // 25 <=============================================================================>
// // Change code below this line
// const getFriends = (users) => {
//     return users.flatMap(user => user.friends).filter((friend, index, arr) => arr.indexOf(friend) === index);
//     ;
//     };
//     // Change code above this line
    
// // 26 <=============================================================================>
// // Change code below this line
// const getActiveUsers = (users) => users.filter(user => user.isActive === true)
// // Change code above this line

// // 27 <=============================================================================>
// // Change code below this line
// const getInactiveUsers = (users) => users.filter(user => user.isActive === false)
// // 28 <=============================================================================>
// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
//   const bookByAuthor = books.find(({author}) => author ===AUTHOR);
  
// // 29 <=============================================================================>
// // Change code below this line
// const getUserWithEmail = (users, email) => users.find( mail => mail.email === email)
// // Change code above this line

// // 30 <=============================================================================>
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(elem => elem %2===0);
// const eachElementInFirstIsOdd = firstArray.every(elem => elem %2!==0);

// const eachElementInSecondIsEven = secondArray.every(elem => elem %2===0);
// const eachElementInSecondIsOdd = secondArray.every(elem => elem %2!==0);

// const eachElementInThirdIsEven = thirdArray.every(elem => elem %2===0);
// const eachElementInThirdIsOdd = thirdArray.every(elem => elem %2!==0);
// // 31 <=============================================================================>
// // Change code below this line
// const isEveryUserActive = (users) => users.every(({isActive}) => isActive === true)
// // Change code above this line

// // 32 <=============================================================================>
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 !== 0);

// // 33 <=============================================================================>
// const isAnyUserActive = (users) => users.some(({isActive}) => isActive === true)
// // 34 <=============================================================================>
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((total, numb) => total += numb );;
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;
// // 35 <=============================================================================>
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((total, elem) => total +=(elem.playtime / elem.gamesPlayed), 0);
  
// // 36 <=============================================================================>
// const calculateTotalBalance = users => users.reduce((total, {balance}) => total += balance,0)
// // 37 <=============================================================================>
// const getTotalFriendCount = users => users.reduce((total,{friends}) => total += friends.length , 0)
// // 38 <=============================================================================>
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

// // 39 <=============================================================================>
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

// // 40 <=============================================================================>
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line
  
//       const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
  
// // 41 <=============================================================================>
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((first,second) => first.author.localeCompare(second.author));
  
//   const sortedByReversedAuthorName = [...books].sort((first,second) => second.author.localeCompare(first.author));
  
//   const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);
  
//   const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating);
  
// // 42 <=============================================================================>
// const sortByAscendingBalance = users => [...users].sort((a,b) => a.balance - b.balance)
// // 43 <=============================================================================>
// const sortByDescendingFriendCount = users => [...users].sort((a,b) => b.friends.length - a.friends.length)
// // 44 <=============================================================================>
// const sortByName = users => [...users].sort((a,b) => a.name.localeCompare(b.name));
// // 45 <=============================================================================>
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
  
//   const names = [...books]
//     .sort((a,b) => a.author.localeCompare(b.author))
//     .filter(({rating}) => rating > MIN_BOOK_RATING)
//     .map(elem => elem.author)
// // 46 <=============================================================================>
// const getNamesSortedByFriendCount = users => [...users]
// .sort((a,b) => a.friends.length-b.friends.length)
// .map(({name}) => name)
// // 47 <=============================================================================>
// const getSortedFriends = users => [...users]
//   .flatMap(elem => elem.friends)
//   .sort((a,b) => a.localeCompare(b))
//   .filter((elem,idx,arr) => arr.indexOf(elem) === idx)
// // 48 <=============================================================================>
// const getTotalBalanceByGender = (users, gender) => [...users]
//   .filter(elem => elem.gender === gender)
//   .reduce((total,elem) => total += elem.balance,0)
