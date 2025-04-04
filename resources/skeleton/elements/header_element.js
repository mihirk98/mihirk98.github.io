class HeaderEl extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = document.createElement("style");

    style.textContent = `
        header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              overflow-y: auto;
              /* portrait */
              flex-direction: row;
        }

        @media (orientation: landscape) {
            header {
                flex-direction: column;
            }
        }
        
        nav {
            width: calc(100% - 8px);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 4px;
        }

        #header_element_ul {
          list-style-type: "-";
        }

        #header_element_ul lh {
          font-weight: 600;
        }

        #header_element_ul li {
          text-decoration: underline;
          cursor: pointer;
        }
    `;

    const nav = document.createElement("nav");

    nav.innerHTML = `
        <ul id="header_element_ul">
            <li onclick="route('home.html')">home</li>
            <lh>exhibitions</lh>
            <li onclick="route('exhibitions/cybernetics/index.html')">cybernetics</li>
            <lh>grants</lh>
            <li onclick="route('grants/c3/index.html')">c3: codes, creativity, communities</li>
            <lh>home+space</lh>
            <li onclick="route('home+space/hiltrup_novtodec24.html')">hiltrup_novtodec24</li>
            <lh>pieces</lh>
            <li onclick="route('pieces/talking.html')">talking</li>
            <li onclick="route('pieces/ethnography_of_notifications.html')">ethnography of notifications</li>
            <li onclick="route('pieces/leave_the_country_then/index.html')">leave the country then</li>
            <li onclick="route('pieces/kamasutra.html')">kamasutra</li>
        </ul>
    `;

    this.appendChild(style);
    this.appendChild(nav);
  }
}

customElements.define("header-element", HeaderEl, { extends: "header" });
