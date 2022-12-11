// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

const handlerButtonDecrementClick = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};

const handlerButtonIncrementClick = function () {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", handlerButtonDecrementClick);

increment.addEventListener("click", handlerButtonIncrementClick);