import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }

  async getHTML() {
    return `<div><h1>Homepage</h1></div>`;
  }
}
