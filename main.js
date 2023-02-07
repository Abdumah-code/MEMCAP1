import './style.css'

const menuopn = document.getElementById('menuopn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const grayfilter = document.querySelector('.grayfilter');
const list = document.querySelector('.list');
const cookis = document.getElementById('cookis');
const header = document.getElementById('header');
const footer = document.getElementById('footer');



menuopn.addEventListener("click", openmenu);
list.classList.add('hidden');

function openmenu() {
  menu.classList.toggle('open');  
  menuopn.style.zIndex = '11';
  grayfilter.classList.toggle('show');
  body.classList.toggle('scroll');

  if (menuopn.classList.contains('rotateO')) {
    menuopn.classList.remove('rotateO');
    menuopn.classList.add('rotateC');
    menu.classList.remove('open');
    list.classList.add('hidden');
  } else {
    menuopn.classList.remove('rotateC');
    menuopn.classList.add('rotateO');
    menu.classList.add('open');
    list.classList.remove('hidden');

  }
}