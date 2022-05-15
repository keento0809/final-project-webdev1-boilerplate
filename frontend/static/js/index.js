import { getCountries } from "./countries.js";

export const countries = getCountries();

console.log(countries);

// Get DOM
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const linkToHome = document.querySelector("#linkToHome");
console.log(linkToHome);

function handleToggleMode() {
  body.classList.toggle("darkMode");
  nav.classList.toggle("darkMode");
}

// Hook up the event
linkToHome.addEventListener("click", handleToggleMode);
