// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector('#validation-input');

const correctLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', checkSymbols => {
  const text = checkSymbols.target.value;

  if (text.length === correctLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});