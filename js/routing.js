// -
// -
// DOM
// -
// -

const headerComponent = document.querySelector("header-component");
const icons = document.getElementById("icons");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const main = document.getElementById("main");

// -
// -
// Listeners
// -
// -

menu.addEventListener("click", navToggle);

function navToggle() {
  if (nav.style.display == "none") nav.style.display = "block";
  else nav.style.display = "none";
}

// -
// -
// Variables
// -
// -

// Must be null for first render
let page;

let client = new XMLHttpRequest();
// Store loaded pages
let pages = {};

// -
// -
// Routing
// -
// -

// On back button pressed
window.onpopstate = () => render();

function route(url) {
  if (url !== "?" + page) history.pushState(null, null, url);
  render();
}

// ||||
// ||||
// ||||
// ||||
//  ⬇

function render() {
  navHide();
  navigate();
}

function navHide() {
  nav.style.display = "none";
}

// ||||
// ||||
// ||||
// ||||
//  ⬇

function navigate() {
  let newPage = new URL(document.location).searchParams;
  let newPageString = new URL(document.location).searchParams.toString();
  if (page !== newPageString) {
    page = newPageString;
    let newPageType = newPage.get("page");
    switch (newPageType) {
      case "project":
        let newPageKey = newPage.get("project");
        populate(newPageKey);
        break;
      case null:
        populate("cambio");
        break;
      default:
        populate(newPageType);
        break;
    }
  }
}

// ||||
// ||||
// ||||
// ||||
//  ⬇

function populate(key, location) {
  headerComponent.setAttribute("heading", key);
  create(key);
}

// ||||
// ||||
// ||||
// ||||
//  ⬇

function create(key) {
  if (key in pages) {
    main.innerHTML = pages[key];
  } else {
    icons.style.display = "none";
    let location = "pages/" + key;
    client.open("GET", location + "/index.html");
    client.onreadystatechange = function () {
      if (client.readyState === XMLHttpRequest.DONE) {
        main.innerHTML = client.responseText;
        let script = document.createElement("script");
        script.src = location + "/script.js";
        script.addEventListener("load", function () {
          pages[key] = main.innerHTML;
          icons.style.display = "flex";
        });
        main.append(script);
      }
    };
    client.send();
  }
}
