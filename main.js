import './style.css'

const menuopn = document.getElementById('menuopn');

menuopn.addEventListener("click", openmenu);

function openmenu() {
  document.querySelector('.menu').classList.toggle('hidden');
  // document.body.style.
  menuopn.style.zIndex = '11';
}