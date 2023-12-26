import "virtual:svg-icons-register";
import "../scss/style.scss";
import catalogSlider from "./catalogSlider";
import catalog from "./catalog";

document.addEventListener("DOMContentLoaded", () => {
  catalog();
  catalogSlider();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
