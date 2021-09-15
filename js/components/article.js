// Do not auto format file, -content-p spans must be on separate single lines

class Article extends HTMLElement {
  connectedCallback() {
    const key = this.attributes.key.value;
    const heading = this.attributes.heading.value;
    const content = this.attributes.content.value;

    const contentId = key + "-" + heading + "-content";
    const contentParagraphSpanId = key + "-" + heading + "-content-p-span-content";
    const expandParagraphSpanId = key + "-" + heading + "-content-p-span-expand";

    this.innerHTML = `
    <div class="article">
        <div class="heading">
            <h3>${heading}</h3>
        </div>
        <div class="content" id="${contentId}">
            <p>
                <span class="contentParagraphSpan">${content.substring(0, content.length > 250 ? 250 : content.length)}</span>
                <span class="expand" id="${expandParagraphSpanId}">read more</span>
            </p>
        </div>
        <div class="sources" id="${key}-${heading}-sources">
        </div>
    </div>
    `;
  }
}

customElements.define("article-component", Article);
