// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок,
// всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const addNumber = document.querySelector('button[data-action="decrement"]');
const substractNumber = document.querySelector('button[data-action="increment"]');
const initialValue = document.getElementById('value');
let counterValue = 0;



addNumber.addEventListener('click', firstButtonEvent);

function firstButtonEvent() {
    counterValue -= 1;
    initialValue.textContent = counterValue;
}



substractNumber.addEventListener('click', secondButtonEvent);

function secondButtonEvent() {
    counterValue += 1;
    initialValue.textContent = counterValue;
}