// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login - form повинна відбуватися відповідно до 
// події submit.Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі 
// поля повинні бути заповнені.Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення 
// поля - значенням властивості.Для доступу до елементів форми використовуй 
// властивість elements.Виведи об'єкт із введеними даними в консоль і очисти 
// значення полів форми методом reset.

const inputField = document.querySelector('.login-form');

inputField.addEventListener('submit', fooSubmit);


function fooSubmit(event) {
    event.preventDefault();
    const emailLink = event.currentTarget.elements.email;
    const passwordLink = event.currentTarget.elements.password;

    if (emailLink.value === '' || passwordLink.value === '') {
        alert('Всі поля повинні бути заповнені!')
    } else {
        const loginForm = {
            [emailLink.name]: emailLink.value,
            [passwordLink.name]: passwordLink.value
        };
        console.log(loginForm)
    }
}

  
  
  
  