import { getCountries } from "./countries.js";

export const countries = getCountries();
console.log(countries)

export let inputValue = "";

let listing;
let updateLoadedData;
let options;

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // fetch countries data
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

  options = regions.map((region) => {
    return `
      <option class='countries__selectOption' value=${region}>
        ${region}
      </option>
    `;
  });

  // Get DOM
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const countriesSearchSec = document.querySelector(
    ".countries__searchSection"
  );
  const countryList = document.querySelector(".countries__countryListSection");
  const toggleIcon = document.querySelector("#toggleIcon");
  const searchInput = document.querySelector(".inputAttribute");
  const regionSelect = document.querySelector(".regionSelect");

//   const selectTag = document.querySelector(".regionSelect");
//   selectTag.innerHTML = `
//   <option class='countries__selectOption' value='all'>Filter by region</option>
//   ${options}
// `;

  // function mapCountries(data) {
  //   listing = data.map((country) => {
  //     return `<li class=countries__countryCard>
  //     <a href=/countries/${country.cca3} data-link>
  //     <img src=${country.flagImg} alt="flag"/>
  //     <div class="countries__countryCardDiv">
  //     <div class="countries__countryName">
  //     <h3>${country.name}</h3>
  //     </div>
  //     <p><strong>Population:</strong> <span class="countries__countryCardData">${country.population.toLocaleString()}</span></p>
  //     <p><strong>Region:</strong> <span class="countries__countryCardData">${
  //       country.region
  //     }</span></p>
  //     <p><strong>Capital:</strong> <span class="countries__countryCardData">${
  //       country.capital
  //     }</span></p>
  //     </div>
  //     </a>
  //       </li>`;
  //   });
  //   if (listing.length === 0)
  //     countryList.innerHTML = `<p>No result matched.</p>`;
  //   else countryList.innerHTML = listing.join("");
  // }

  // mapCountries(loadedData);

  const countryCards = document.querySelectorAll(".countries__countryCard");

  // original code
  // searchInput.addEventListener("keyup", function (e) {
  //   inputValue = e.target.value;
  //   console.log(inputValue);
  //   updateLoadedData = loadedData.filter((country) => {
  //     return country.name.toLowerCase().includes(inputValue);
  //   });
  //   mapCountries(updateLoadedData);
  // });

  // original code
  // regionSelect.addEventListener("change", function (e) {
  //   const selectedValue = e.target.value;
  //   if (selectedValue === "all") updateLoadedData = loadedData;
  //   else
  //     updateLoadedData = loadedData.filter((country) => {
  //       return country.region === selectedValue;
  //     });
  //   mapCountries(updateLoadedData);
  // });

  function handleToggleMode() {
    body.classList.toggle("darkMode");
    nav.classList.toggle("darkMode");
    countriesSearchSec.classList.toggle("darkMode");
    countryList.classList.toggle("darkMode");
    // countryCards.forEach((card) => card.classList.toggle("darkMode"));
  }

  toggleIcon.addEventListener("click", handleToggleMode);
});
