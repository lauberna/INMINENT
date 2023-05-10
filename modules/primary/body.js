import { createElements } from '../socialMedia.js';
import carousel from '../carousel.js';
import { hide } from './navBar.js';
function sections() {
  showSection('section-0');
  createElements('sectionRed');
/*   carousel(); */
}

let section = document.getElementsByClassName('section');

function hideSections() {
  Array.from(section).forEach((section) => {
    section.classList.add('none');
  });
}
function showSection(sectionID) {
  hideSections();
  let section = document.getElementById(sectionID);
  section.classList.remove('none');
}
function click() {
  let sectionID = this.getAttribute('data-section');
  let sectionAct = document.getElementById(sectionID);
  hide();
  if (sectionAct.classList.contains('none')) {
    hideSections();
    showSection(sectionID);
  }
}
export { showSection, click, sections };
