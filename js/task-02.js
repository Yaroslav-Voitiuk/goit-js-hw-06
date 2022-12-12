// // Напиши скрипт, який для кожного елемента масиву ingredients:
// // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// // Додасть назву інгредієнта як його текстовий вміст.
// // Додасть елементу клас item.
// // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const listElements = ingredients.map((ingredient) => {
  const listlEement = document.createElement('li');
  listlEement.classList.add('item');
  listlEement.textContent = [ingredient];

  return listlEement;
});

listIngredients.append(...listElements);
console.log(listIngredients)  