import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Country");
  }

  async getHTML() {
    console.log(this.params.id, "WHY nothing shows up");
    // return "<h1>Country!!!!</h1>";
    return `
            <div class="view">
                <p>This country is ${this.params.id}.</p>
            </div>
        `;
  }
}
