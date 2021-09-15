class Dialog extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="dialog">
        <div id="dialog-content">
            <h4 id="dialog-close" class="link">close</h4>
            <h3 id="dialog-heading"></h3>
            <h4 id="dialog-title"></h4>
            <p id="dialog-content-p"></p>
            <div id="dialog-sources"></div>
        </div>
    </div>
    `;
  }
}

customElements.define("dialog-component", Dialog);