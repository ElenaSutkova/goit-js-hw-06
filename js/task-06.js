// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє
// його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті
// data - length.Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputLink = document.querySelector('#validation-input');
const inputLength = Number(inputLink.dataset.length);

inputLink.addEventListener('blur', inputBlur);
inputLink.addEventListener('focus', inputFocus);

function inputBlur() {
    const inputValueLength = inputLink.value.trim().length;

    if (inputValueLength === inputLength) {
        inputLink.classList.add('valid');
    } else {
        inputLink.classList.add('invalid')
    }
}

function inputFocus() {
  inputLink.classList.remove('valid', 'invalid');
};