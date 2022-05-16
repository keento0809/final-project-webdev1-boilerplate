import { getCountries } from "./countries.js";

export const countries = getCountries();

console.log(countries);

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // Get DOM
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const linkToHome = document.querySelector("#linkToHome");

  const searchInput = document.querySelector(".inputAttribute");
  searchInput.addEventListener("keypress", function (e) {
    console.log(e.target.value);
  });

  function handleToggleMode() {
    body.classList.toggle("darkMode");
    nav.classList.toggle("darkMode");
  }

  // Hook up the event
  linkToHome.addEventListener("click", handleToggleMode);
});
