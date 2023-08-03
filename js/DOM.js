// <=============================================================================>

// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// const button = document.querySelector('#alertButton');
// const input = document.querySelector('#alertInput');
// button.addEventListener('click', foo)
// function foo (){
//   const text = input.value;
//   alert(text);
// }

// <=============================================================================>

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const button = document.querySelector('#passwordButton')
// const input = document.querySelector('#passwordInput')
// button.addEventListener('click', foo)
// function foo () {
//   if(input.type === 'text'){
//     button.textContent = "Показати";
//     input.type = 'password';
//   }else {
//     button.textContent = "Приховати";
//     input.type = 'text';
//   }
// }

// <=============================================================================>

// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const buttonDecrease = document.querySelector('#decrease');
// const buttonIncrease = document.querySelector('#increase');
// const box = document.querySelector('#box');

// buttonDecrease.addEventListener('click', onClick);
// buttonIncrease.addEventListener('click', onClick);

// function onClick(event) {
//   console.dir(event.currentTarget)
//   const id = event.currentTarget.id;
//   const width = box.offsetWidth;
//   const height = box.offsetHeight;

//   if (id === 'increase') {
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;

//   } else {
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;

//   }
// }
// <=============================================================================>
// const swapButton = document.getElementById('swapButton')
// const leftSwapInput = document.getElementById('leftSwapInput')
// const rightSwapInput = document.getElementById('rightSwapInput')
// swapButton.addEventListener("click", onClick)
// function onClick() {
//   const fightValue = leftSwapInput.value
//   leftSwapInput.value = rightSwapInput.value
//   rightSwapInput.value = fightValue

// }
// <=============================================================================>

// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const sortByNameButton = document.querySelector("#sortByNameButton");

// const sortByLastNameButton = document.querySelector("#sortByLastNameButton");

// const people = document.querySelectorAll(".person");
// const list = document.querySelector(".people");

// sortByNameButton.addEventListener("click", onByNameClick);

// function onByNameClick(evt) {
//   const arr = [...people].sort((a, b) =>
//     a.textContent.localeCompare(b.textContent),
//   );
//   list.innerHTML = "";
//   list.append(...arr);
// }

// sortByLastNameButton.addEventListener("click", onByLastnameClick);

// function onByLastnameClick() {
//   const arr = [...people].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[1].toLowerCase();
//     const secondValue = b.textContent.split(" ")[1].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });
//   list.innerHTML = "";
//   list.append(...arr);
// }
// <=============================================================================>

// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const actors = [
//   'Peter Miller',
//   'John Carter',
//   'Amanda Diaz',
//   'Brad Sanders',
//   'Devis Brooks',
//   'Robert Morgan',
// ];

// const refs = {
//   list: document.querySelector('.contacts'),
//   input: document.querySelector('.contactsFilter'),
// };

// function randerContactsMarkup(actors) {
//   return actors
//     .map(actor => `<li class="contact">${actor}</li>`)
//     .sort((a, b) => a.localeCompare(b))
//     .join('');
// }
// refs.list.insertAdjacentHTML('beforeend', randerContactsMarkup(actors));

// refs.input.addEventListener('input', handlerInputing);

// function handlerInputing(evt) {
//   const valueInput = evt.target.value;
//   const filterActors = actors.filter(elem =>
//     elem.toLowerCase().includes(valueInput.toLowerCase())
//   );
//   refs.list.innerHTML = randerContactsMarkup(filterActors);
// }

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
