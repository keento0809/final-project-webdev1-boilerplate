import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    const regions = [];

    const options = regions.map((region) => {
      return `
        <option class='countries__selectOption' value=${region}>
          ${region}
        </option>
      `;
    });

    // display data(original)
    const countryList = document.createElement("ul");
    countryList.classList.add("countries__countryList");

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

    return `<div class="container">
    <div class="wrapper">
    <section class="countries__searchSection">
    ${searchDiv.innerHTML}
    ${selectTagDiv.innerHTML}
    </section>
    <section class="countries__countryListSection">
    </section>
    </div>
    </div>`;
  }
}
