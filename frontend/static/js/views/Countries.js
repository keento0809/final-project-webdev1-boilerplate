import AbstractView from "./AbstractView.js";
import { countries, inputValue, updateLoadedData } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
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

    // display data(original)
    let testLi = loadedData.map((country) => {
      return `<li class=countries__countryCard>
      <a href=/countries/${country.cca3} data-link>
      <img src=${country.flagImg} alt="flag"/>
      <div class="countries__countryCardDiv">
      <div class="countries__countryName">
      <h3>${country.name}</h3>
      </div>
      <p><strong>Population:</strong> <span class="countries__countryCardData">${country.population}</span></p>
      <p><strong>Region:</strong> <span class="countries__countryCardData">${country.region}</span></p>
      <p><strong>Capital:</strong> <span class="countries__countryCardData">${country.capital}</span></p>
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
