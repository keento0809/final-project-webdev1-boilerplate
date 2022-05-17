import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }

  async getHTML() {
    window.addEventListener("DOMContentLoaded", function (e) {
      const body = document.querySelector("body");
      const nav = document.querySelector("nav");

      // if (body.classList.contains("darkMode"))
      //   body.classList.remove("darkMode");
      // if (nav.classList.contains("darkMode")) nav.classList.remove("darkMode");
    });

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
