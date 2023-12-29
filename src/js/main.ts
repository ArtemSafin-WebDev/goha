import "virtual:svg-icons-register";
import "../scss/style.scss";
import catalogSlider from "./catalogSlider";
import catalog from "./catalog";
import validation from "./validation.ts";
import tabs from "./tabs.ts";

document.addEventListener("DOMContentLoaded", () => {
  catalog();
  catalogSlider();
  validation();
  tabs();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
