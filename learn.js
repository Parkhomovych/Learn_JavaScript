// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.

// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки.
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.

// Для зручності зберігання списку використовуй такий перелік.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

input.addEventListener('change', changeTheme);

function changeTheme(evt) {
  if (!evt.currentTarget.checked) {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('saveTheme', Theme.LIGHT);
  } else {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('saveTheme', Theme.DARK);
  }
}
const myTheme = localStorage.getItem('saveTheme');
if (myTheme) {
  body.classList.add(myTheme);
} else {
  body.classList.add(Theme.LIGHT);
}
if (myTheme === Theme.DARK) {
  input.checked = true;
}
