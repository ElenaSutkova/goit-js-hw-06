const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const container = document.getElementById('ingredients');

const itemIngredient = ingredients.map(ingredient => {
  const addList = document.createElement('li');
  addList.classList.add('item');
  addList.textContent = ingredient;
  return addList;
});

container.append(...itemIngredient)