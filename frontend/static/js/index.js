import { getCountries } from "./countries.js";

export const countries = getCountries();

export let inputValue = "";

export let updateLoadedData = "aa";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const loadedData = [];
  const regions = [];
  const hash = {};

  for (const key in countries) {
    if (hash[countries[key].region] === undefined) {
      hash[countries[key].region] = 1;
      regions.push(countries[key].region);
    }

    loadedData.push({
      name: countries[key].name.common,
      population: countries[key].population,
      region: countries[key].region,
      capital: countries[key].capital,
      flagImg: countries[key].flags.png,
    });
  }
  console.log(loadedData);
  console.log(regions);

  // Get DOM
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const linkToHome = document.querySelector("#linkToHome");

  const searchInput = document.querySelector(".inputAttribute");
  const regionSelect = document.querySelector(".regionSelect");
  console.log(searchInput);
  console.log(regionSelect);

  searchInput.addEventListener("keypress", function (e) {
    inputValue = e.target.value;
    updateLoadedData = loadedData.filter((country) => {
      return country.name.toLowerCase().includes(inputValue);
    });
    console.log(updateLoadedData);
  });

  function handleToggleMode() {
    body.classList.toggle("darkMode");
    nav.classList.toggle("darkMode");
  }

  // Hook up the event
  linkToHome.addEventListener("click", handleToggleMode);
});
