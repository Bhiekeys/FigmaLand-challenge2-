/** @format */

const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');

window.onscroll = () => {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};


const burger = document.querySelector('.burger');
const navlist = document.querySelector('.nav-list');
burger.addEventListener('click', () => {
  navlist.classList.toggle('active');

 if (navlist.classList.contains('active')) {
   burger.src = "assets/close.png";
 } else {
   burger.src = 'assets/hamburger.png';
 }
})


const list = document.querySelectorAll('.list');
list.forEach((list) => {
  list.addEventListener('click', () => {
    removeActiveButton();
    list.classList.add('active');
  });
});

function removeActiveButton() {
  list.forEach((list) => {
    list.classList.remove('active');
  });
}

