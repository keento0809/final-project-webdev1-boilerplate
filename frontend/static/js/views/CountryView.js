import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }

  async getHTML() {
    return `
                
              <div class="CountryView">
                <a class="button-country" href="/countries"><ion-icon name="arrow-back-outline"></ion-icon> Back</a>
                <div class="country-container">
                  <img src="https://flagcdn.com/w320/uy.png">
                  <div class="country-info">
                    <div class="name">
                      <h2>Australia</h2>
                    </div>
                    <div class="native">
                      <p><strong>Native Name:</strong> Australia</p>
                    </div>
                    <div class="population">
                      <p><strong>Population:</strong> 25,687,041</p>
                    </div>
                    <div class="region">
                      <p><strong>Region:</strong> Oceania</p>
                    </div>
                    <div class="sub-region">
                      <p><strong>Sub Region:</strong> Australia</p>
                    </div>
                    <div class="capital">
                      <p><strong>Capital:</strong> Canberra</p>
                    </div>
                    <div class="tld">
                      <p><strong>Top Level Domain:</strong> .au</p>
                    </div>
                    <div class="currencies">
                      <p><strong>Currencies:</strong> Australian Dollar</p>
                    </div>
                    <div class="languages">
                      <p><strong>Languages:</strong> English</p>
                    </div>
                    <div class="borders">
                    <p><strong>Border Countries:</strong></p>
                  </div>
                  </div>
                </div>
              </div>
            
        `;
  }
}

