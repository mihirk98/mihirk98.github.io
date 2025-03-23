const mainEl = document.getElementsByTagName("main")[0];
let loc =
  window.location.search.replace("?loc=", "") !== ""
    ? window.location.search.replace("?loc=", "")
    : "home.html";

function route(routeLoc) {
  if (routeLoc !== loc) {
    history.pushState({}, "", "?loc=" + routeLoc);
    render();
  }
}

async function render() {
  loc = window.location.search.replace("?loc=", "");
  const response = await fetch(loc);
  mainEl.innerHTML = await response.text();
}

window.pushstate = render;
window.onpopstate = render;
history.replaceState({}, "", "?loc=" + loc);
render();
