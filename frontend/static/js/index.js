import { getCountries } from "./countries.js";

export const countries = getCountries();

// console.log(countries);

export let inputValue = "";

export let updateLoadedData = "aa";

// function testFunc(arr) {
//   console.log(arr[0]);
//   return arr;
// }

// export const resultArr = testFunc(arr);

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
      cca3: countries[key].cca3,
      name: countries[key].name.common,
      population: countries[key].population,
      region: countries[key].region,
      capital: countries[key].capital,
      flagImg: countries[key].flags.png,
    });
  }
  // console.log(loadedData);
  // console.log(regions);

  // Get DOM
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const countriesSearchSec = document.querySelector(
    ".countries__searchSection"
  );
  const countryCards = document.querySelectorAll(".countries__countryCard");

  const toggleIcon = document.querySelector("#toggleIcon");
  const searchInput = document.querySelector(".inputAttribute");
  const regionSelect = document.querySelector(".regionSelect");

  // original code
  searchInput.addEventListener("keyup", function (e) {
    inputValue = e.target.value;
    console.log(inputValue);
    updateLoadedData = loadedData.filter((country) => {
      return country.name.toLowerCase().includes(inputValue);
    });
    console.log(updateLoadedData);
    // testFunc(updateLoadedData);
    return updateLoadedData;
  });

  // original code
  regionSelect.addEventListener("change", function (e) {
    const selectedValue = e.target.value;
    console.log(e.target.value);

    updateLoadedData = loadedData.filter((country) => {
      return country.region === selectedValue;
    });
    console.log(updateLoadedData);
    return updateLoadedData;
  });

  function handleToggleMode() {
    body.classList.toggle("darkMode");
    nav.classList.toggle("darkMode");
    countriesSearchSec.classList.toggle("darkMode");
    countryCards.forEach((card) => card.classList.toggle("darkMode"));
  }

  toggleIcon.addEventListener("click", handleToggleMode);
});
