class Page extends HTMLElement {
  connectedCallback() {
    const key = this.attributes.key.value;
    const title = this.attributes.title.value;
    this.innerHTML = `
    <div class="page" id=${key}>
      <div class="title">
        <h1>${title}</h1>
      </div>
      <div class="body" id="${key}-body">
      </div>
    </div>
    `;
  }
}

customElements.define("page-component", Page);
