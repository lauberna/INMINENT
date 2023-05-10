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

let main = document.getElementById('main');
let nCont = document.getElementById('navContainer');

nCont.style.display = 'none';


btn.addEventListener('click', function () {
  if (nCont.style.opacity != 0) {
    hide();
  } else {
    show();
  }
});

function hide() {
  main.style.filter = 'blur(0px)';
  nCont.style.opacity = 0;
  btn.style.rotate = '-180deg';
  setTimeout(() => {
    nCont.style.display = 'none';
  }, 100);
}

function show() {
  nCont.style.display = 'block';
  main.style.filter = 'blur(30px)';
  btn.style.rotate = '270deg';
  nCont.style.opacity = 1;
}
export {hide}

