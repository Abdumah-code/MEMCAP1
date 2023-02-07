import './style.css'

const menuopn = document.getElementById('menuopn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const grayfilter = document.querySelector('.grayfilter');
const list = document.querySelector('.list');
const cookis = document.getElementById('cookis');
const accept = document.getElementById('accept');
const reject = document.getElementById('reject');


menuopn.addEventListener("click", openmenu);
accept.addEventListener("click", cookie);
reject.addEventListener("click", cookie);

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

function cookie() {
  cookis.style.display = "none";
  grayfilter.classList.add('hidden');
  accept.classList.add('hidden');
  reject.classList.add('hidden');
}