class Source extends HTMLElement {
  connectedCallback() {
    const index = this.attributes.index.value;
    const desc = this.attributes.desc.value;
    this.innerHTML = `
    <div class="source">
        <h4>[${index}]&nbsp</h4>
        <h4 class="desc">${desc}</h4>
    </div>
    `;
  }
}

customElements.define("source-component", Source);
