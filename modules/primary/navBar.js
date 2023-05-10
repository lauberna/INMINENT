import { click } from './body.js';
import { createElements } from '../socialMedia.js';

export default function navBar() {
  let navbar = document.getElementById('navbar');
  let links = document.getElementsByClassName('element');

  function createLinks() {
    let navPoints = ['Home', 'Acerca de', 'Contactanos', 'Fotos'];
    navPoints.forEach((element, i) => {
      let li = document.createElement('li');
      li.classList.add(`element`);
      li.setAttribute('data-section', `section-${i}`);
      li.setAttribute('id', element.replace(/\s+/g, ''));
      li.textContent = element;
      navbar.appendChild(li);
    });

    Array.from(links).forEach((link) => {
      link.addEventListener('click', click);
    });

    createElements('navRed');
  }

  window.addEventListener('load', createLinks);
}

let btn = document.getElementById('btn');
let mod = document.getElementById('mod');
let main = document.getElementById('main');
let nCont = document.getElementById('navContainer');

nCont.style.display = 'none';
mod.style.display = 'none';

btn.addEventListener('click', function () {
  if (mod.style.opacity == 0.5) {
    hide();
  } else {
    show();
  }
});

function hide() {
  mod.style.opacity = 0;
  main.style.filter = 'blur(0px)';
  nCont.style.opacity = 0;
  btn.style.rotate = '-180deg';
  mod.style.display = 'none';
  setTimeout(() => {
    nCont.style.display = 'none';
  }, 100);
}

function show() {
  nCont.style.display = 'block';
  mod.style.opacity = 0.5;
  main.style.filter = 'blur(30px)';
  btn.style.rotate = '270deg';
  nCont.style.opacity = 1;
  mod.style.display = 'block';
}

export { hide };
