import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  // <ion-icon name="search-outline"></ion-icon>
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
        name: countries[key].name.common,
        population: countries[key].population,
        region: countries[key].region,
        capital: countries[key].capital,
        flagImg: countries[key].flags.png,
      });
    }
    console.log(loadedData);
    console.log(regions);

    const options = regions.map((region) => {
      return `
        <option class='countries__selectOption'>
          ${region}
        </option>
      `;
    });

    // <ion-icon name="heart-outline"></ion-icon>
    // display data
    let testLi = loadedData.map((country) => {
      return `<li class=countries__countryCard>
      <a href="">
      <img src=${country.flagImg} alt="flag" />
      <div class="countries__countryCardDiv">
      <div class="countries__countryName">
      <h3>${country.name}</h3>
      </div>
      <p><strong>Population:</strong> <span class="countries__countryCardData">${country.population}</span></p>
      <p><strong>Region:</strong> <span class="countries__countryCardData">${country.region}</span></p>
      <p><strong>Capital:</strong> <span class="countries__countryCardData">${country.capital}</span></p>
      </a>
      </div>
        </li>`;
    });
    // sorted by alphabetical order
    testLi.sort((a, b) => {
      return a < b ? -1 : 1;
    });

    const countryList = document.createElement("ul");
    countryList.classList.add("countries__countryList");
    countryList.innerHTML = `aaa`;
    console.log(countryList);

    // create searchInput
    const searchInput = document.createElement("div");
    searchInput.classList.add("inputAttribute");
    searchInput.innerHTML = `
    <input type="text" class="countries__searchInput" placeHolder="Search for a country..." />
    `;

    // create selectRegion tag
    const selectTag = document.createElement("div");
    selectTag.innerHTML = `
    <select id="selectRegion" type="" class="countries__searchDropdown">
    <option class='countries__selectOption'>Filter by region</option>
    ${options}
  </select>
    `;

    const aa = document.querySelector("#selectRegion");
    console.log(aa);
    // original
    // <input type="text" class="countries__searchInput" placeHolder="Search for a country..." />
    // <select id="selectRegion" type="" class="countries__searchDropdown">
    //   <option class='countries__selectOption'>Filter by region</option>
    //   ${options}
    // </select>

    console.log(this.params);
    return `<div class="container">
    <div class="wrapper">
    <section class="countries__searchSection">
    ${searchInput.innerHTML}
    ${selectTag.innerHTML}
    </section>
    <section class="countries__countryListSection">
      ${testLi}
    </section>
    </div>
    </div>`;
  }
}

{
  /* <h1>Countries</h1> */
}
