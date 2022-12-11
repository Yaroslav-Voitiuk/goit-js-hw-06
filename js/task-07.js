// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const text = document.querySelector('#text');
const input = document.querySelector('#font-size-control');

input.addEventListener("input", changedFontSize);

function changedFontSize(evt) {
    const size = input.value;
    text.style.fontSize = size + "px";
}

