const variables = {
    categories: document.getElementById('categories'),
    categoriesItems: document.querySelectorAll('#categories .item')    
}

console.log(`Number of categories: ${variables.categories.children.length}`);

variables.categoriesItems.forEach(elm => {
    const elementsListItems = elm.querySelectorAll('ul li');

    console.log('Category: ', elm.firstElementChild.textContent);
    console.log('Elements: ', elementsListItems.length);   
});