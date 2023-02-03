import './style.css'

const menuopn = document.getElementById('menuopn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const grayfilter = document.querySelector('.grayfilter');

menuopn.addEventListener("click", openmenu);

function openmenu() {
  menu.classList.toggle('hidden');  
  menuopn.style.zIndex = '11';
  grayfilter.classList.toggle('hidden');
  body.classList.toggle('scroll');

  if (menuopn.classList.contains('rotateO')) {
    menuopn.classList.remove('rotateO');
    menuopn.classList.add('rotateC');
  } else {
    menuopn.classList.remove('rotateC');
    menuopn.classList.add('rotateO');
  }
}