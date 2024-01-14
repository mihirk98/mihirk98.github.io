class Header extends HTMLElement {
  static get observedAttributes() {
    return ["heading"];
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            <h1 id="title"></h1>
            <div id="icons">
                <svg id="home" onclick="route('/');" viewBox="0 0 100 80" width="22.5" height="22.5">
                    <g>
                        <path id="homeFrame" d="M 15,78 85,78 85,45 50,5 15,45 z "></path>
                        <path id="homeDoor" d="M 35,80 65,80 65,55 35,55 z "></path>
                        <path id="homeRoof" d="M 2,50 50,5 98,50 "></path>
                    </g>
                </svg>
                <svg id="menu" viewBox="0 0 100 80" width="22.5" height="22.5">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
        </header>
        <style>
            header-component {
                width: 100vw;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }

            header {
                width: 100%;
                height: var(--header-height);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background-color: var(--header-background);
                color: #fff;
            }

            #title {
                padding-left: var(--spacing-large);
            }

            #menu {
                padding-right: var(--spacing-normal);
            }

            #icons {
                display: flex;
                flex-direction: row;
                padding-left: var(--spacing-large);
                column-gap: var(--spacing-normal);
            }

            #icons > svg {
                cursor: pointer;
            }

            #homeFrame, #homeRoof {
                fill: #fff;
            }

            #homeDoor {
                fill: var(--header-background);
            }

            #menu > rect {
                fill: #fff;
            }
        </style>
    `;
  }

  render() {
    let heading = this.getAttribute("heading");

    let h1El = this.querySelector("h1");
    h1El.innerHTML = heading;

    let home = this.querySelector("#home");
    let menu = this.querySelector("#menu");
    if (heading === "cambio") {
      home.style.display = "none";
      menu.style.display = "none";
    } else {
      home.style.display = "inline";
      menu.style.display = "inline";
    }
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("header-component", Header);
