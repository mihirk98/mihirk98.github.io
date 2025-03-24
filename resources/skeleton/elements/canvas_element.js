class CanvasEl extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(this.getAttribute("shape"));
    const style = document.createElement("style");

    style.textContent = `
        canvas-element {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            overflow-y: auto;
            /* portrait */
            padding: 5vw;
        }
        
        .rectangle {
          width: 90vw;
          height: calc(100% - 10vw);
        }

        .square {
          width: 90vw;
          height: 90vw;
        }
            
        @media (orientation: landscape) {
            canvas-element {
                padding: 5vh;
            }

            .rectangle {
              height: 90vh;
              width: calc(100% - 10vh);
            }

            .square {
              height: 90vh;
              width: 90vh;
            }
        }

        canvas-element img, video {
          object-fit: contain;
        }
    `;

    this.appendChild(style);
  }
}

customElements.define("canvas-element", CanvasEl);
