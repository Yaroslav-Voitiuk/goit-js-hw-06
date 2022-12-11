// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const changeColorButton = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('.color')

changeColorButton.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor(){
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}