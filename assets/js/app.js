/* import { carousel } from "../../modules/Carousel.js"; */
import navBar from "../../modules/primary/navBar.js";
import validateForm from "../../modules/primary/validateForm.js";
import { sections } from "../../modules/primary/body.js";
import { createElements } from "../../modules/socialMedia.js";

function appInit() {
  navBar();
  sections();
  validateForm();
}
appInit();
