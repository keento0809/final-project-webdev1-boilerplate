import AbstractView from "./AbstractView.js";
import { countries, updateLoadedData } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    // test
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav");

    // window.location = function () {
    //   console.log("ふひひひ日保ひおほいほほほいほい");
    // };

    const countriesSearchSec = document.querySelector(
      ".countries__searchSection"
    );
    const countryCards = document.querySelectorAll(".countries__countryCard");
    const toggleIcon = document.querySelector("#toggleIcon");
    toggleIcon.addEventListener("click", function (e) {
      body.classList.add("darkMode");
      nav.classList.add("darkMode");
      countriesSearchSec.classList.add("darkMode");
      countryCards.forEach((card) => card.classList.add("darkMode"));
    });

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

    const options = regions.map((region) => {
      return `
        <option class='countries__selectOption' value=${region}>
          ${region}
        </option>
      `;
    });

    console.log(updateLoadedData);

    // display data(original)
    let testLi = loadedData.map((country) => {
      return `<li class=countries__countryCard>
      <a href=/countries/${country.cca3} data-link>
      <img src=${country.flagImg} alt="flag"/>
      <div class="countries__countryCardDiv">
      <div class="countries__countryName">
      <h3>${country.name}</h3>
      </div>
      <p><strong>Population:</strong> <span class="countries__countryCardData">${country.population.toLocaleString()}</span></p>
      <p><strong>Region:</strong> <span class="countries__countryCardData">${
        country.region
      }</span></p>
      <p><strong>Capital:</strong> <span class="countries__countryCardData">${
        country.capital
      }</span></p>
      </div>
      </a>
        </li>`;
    });

    // sorted by alphabetical order
    testLi.sort((a, b) => {
      return a < b ? -1 : 1;
    });

    const countryList = document.createElement("ul");
    countryList.classList.add("countries__countryList");
    countryList.innerHTML = `aaa`;
    // console.log(countryList);

    // create searchInput
    const searchDiv = document.createElement("div");
    const searchInput = document.createElement("input");
    searchDiv.append(searchInput);
    searchInput.classList.add("inputAttribute", "countries__searchInput");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeHolder", "Search for a country...");

    // create selectRegion tag
    const selectTagDiv = document.createElement("div");
    const selectTag = document.createElement("select");
    selectTagDiv.append(selectTag);
    selectTag.classList.add("regionSelect", "countries__searchDropdown");
    selectTag.innerHTML = `
              <option class='countries__selectOption'>Filter by region</option>
              ${options}
            `;

    window.addEventListener("DOMContentLoaded", function (e) {
      const toggleIcon = document.querySelector("#toggleIcon");
      console.log(toggleIcon);
    });

    return `<div class="container">
    <div class="wrapper">
    <section class="countries__searchSection">
    ${searchDiv.innerHTML}
    ${selectTagDiv.innerHTML}
    </section>
    <section class="countries__countryListSection">
      ${testLi.join("")}
    </section>
    </div>
    </div>`;
  }
}
