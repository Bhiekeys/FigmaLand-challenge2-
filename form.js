/** @format */



const closed = document.getElementById('closed');
const input = document.querySelector('.input');

closed.addEventListener('click', () => {
    if (input.type === "password") {
        input.type = 'text';
    closed.src = '/assets/eye-on.png';
    } else {
        input.type = 'password'
    closed.src = '/assets/eye-off.png';
  }
});

const button = document.getElementById('button');
const names = document.getElementById('input')
const email = document.getElementById('email')
button.addEventListener('click', () => {
    if (input.type === 'text' && input.type === 'email') {
        alert('welcome')
    }
})