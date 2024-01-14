class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav id="nav"> 
                <ul>
                    <li><span class="nav-ul-span-title">menu</span></li>
                    <li>
                        <a onclick="route('?page=threads');">threads</a>
                    </li>
                    <li>
                        <a onclick="route('?page=softwares');">softwares</a>
                    </li>
                    <li>
                        <a onclick="route('?page=project&project=tree');">tree</a>
                    </li>
                </ul>
            </nav>
            <style>
                nav {
                    position: absolute;
                    top: var(--header-height);
                    right: 0;
                    width: var(--nav-width);
                    display: none;
                    background-color: var(--nav-background);
                    border: var(--border-normal) solid #000;
                }
                
                nav > ul {
                    width: 100%;
                    list-style: none;
                    padding-bottom: var(--spacing-normal);
                }
    
                nav > ul > li {
                    width: var(--width-percentage-normal);
                    padding: var(--spacing-normal) var(--spacing-normal) 0 var(--spacing-normal);
                }
    
                .nav-ul-span-title {
                    width: 100%;
                    display: inline-block;
                    text-align: right;
                    font-size: var(--font-size-small);
                }
            </style>
        `;
  }
}

customElements.define("nav-component", Nav);
