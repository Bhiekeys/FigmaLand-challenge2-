/** @format */

const closed = document.getElementById('closed');
const input = document.querySelector('.input');

closed.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text';
    closed.src = '/assets/eye-on.png';
  } else {
    input.type = 'password';
    closed.src = '/assets/eye-off.png';
  }
});

// const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = {
    fullname: '',
    email: '',
    password: '',
    radio: false,
  };
  data.fullname = fullname.value;
  data.email = email.value;
  data.password = password.value;
  data.radio = document.getElementById('radio').checked;
  for (let d in data) {
    if (data[d] == '') {
      if (d == 'fullname') {
        document.querySelector('.input1').style.border = '2px solid red';
      } else if (d == 'email') {
        document.querySelector('.input3').style.border = '2px solid red';
      } else if (d == 'password') {
        document.querySelector('.input2').style.border = '2px solid red';
      } else {
        document.querySelector('#radiofeedback').style.display = 'block';
      }
    }
  }
});
