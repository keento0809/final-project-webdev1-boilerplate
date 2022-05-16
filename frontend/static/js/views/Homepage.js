import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }

  async getHTML() {
    return `<div class="backdrop">
    <div class="homepage">
      <div class="homepage__overlay">
          <h2 class="homepage__overlayTitle">Welcome to Countries</h2>
          <p class="homepage__description">Explore countries you've never seen.</p>
          <button class="homepage__startBtn">
          <a href="/countries" data-link>
          Get started
          </a>
          </button>
      </div>
    </div>
    </div>`;
  }
}
