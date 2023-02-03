import './style.css'

const menuopn = document.getElementById('menuopn');
const body = document.querySelector('body');

menuopn.addEventListener("click", openmenu);

function openmenu() {
  document.querySelector('.menu').classList.toggle('hidden');
  menuopn.style.zIndex = '11';
  document.querySelector('.grayfilter').classList.toggle('hidden');
  body.classList.toggle('scroll');
}