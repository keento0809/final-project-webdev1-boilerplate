import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }

  async getHTML() {
    return `
            <div class="wrapper">
              <div class="view">
                <p>This country is ${this.params.id}.</p>
                <button class="">
                  <a href="/countries">BACK</a>
                </button>
              </div>
            </div>
        `;
  }
}
