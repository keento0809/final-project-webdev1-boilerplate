import { countries } from "../index.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }  

  async getHTML() {
    const divcountries = document.createElement("div");
    divcountries.classList.add("classcountries");
    
    const countryInfo = countries.find(
      (country) => country.cca3 === this.params.id
    );
    const currencyObj = countryInfo.currencies;
    const langObj = countryInfo.languages;
    
    // console.log(Object.values(countryInfo.currencies));
    function checkVal(obj, isCurr) {
      let result;
      for (const key in obj) {
        switch (isCurr) {
          case "TRUE": {
            result = obj[key].name;
            break;
          }
          case "FALSE": {
            result = obj[key];
            break;
          }
        }
      }
      return result;
    }
    const currInfo = checkVal(currencyObj, "TRUE");
    const langInfo = checkVal(langObj, "FALSE");
    const checkedCapital =
      countryInfo.capital === undefined ? "" : countryInfo.capital[0];
    const checkBorders =
      countryInfo.borders === undefined ? "" : countryInfo.borders;
    const resultInfo = {
      name: countryInfo.name.common,
      nativeName: countryInfo.altSpellings[2],
      population: countryInfo.population,
      region: countryInfo.region,
      subRegion: countryInfo.subregion,
      capital: checkedCapital,
      topLevelDomain: countryInfo.tld[0],
      currencies: currInfo,
      languages: langInfo,
      borders: checkBorders,
      flags: countryInfo.flags.png,
    };
    console.log(resultInfo);

    return `
                
              <div class="CountryView">
                <a class="button-country" href="/countries"><ion-icon name="arrow-back-outline"></ion-icon> Back</a>
                <div class="country-container">
                  <img src="${resultInfo.flags}">
                  <div class="country-info">
                    <div class="name">
                      <h2>${resultInfo.name}</h2>
                    </div>
                    <div class="native">
                      <p><strong>Native Name:</strong>${resultInfo.nativeName}</p>
                    </div>
                    <div class="population">
                      <p><strong>Population:</strong>${resultInfo.population}</p>
                    </div>
                    <div class="region">
                      <p><strong>Region:</strong>${resultInfo.region}</p>
                    </div>
                    <div class="sub-region">
                      <p><strong>Sub Region:</strong>${resultInfo.subRegion}</p>
                    </div>
                    <div class="capital">
                      <p><strong>Capital:</strong>${resultInfo.capital}</p>
                    </div>
                    <div class="tld">
                      <p><strong>Top Level Domain:</strong>${resultInfo.topLevelDomain}</p>
                    </div>
                    <div class="currencies">
                      <p><strong>Currencies:</strong>${resultInfo.currencies}</p>
                    </div>
                    <div class="languages">
                      <p><strong>Languages:</strong>${resultInfo.languages}</p>
                    </div>
                    <div class="borders">
                    <p><strong>Border Countries:</strong>${resultInfo.borders}</p>
                  </div>
                  </div>
                </div>
              </div>
            
        `;
  }
}

