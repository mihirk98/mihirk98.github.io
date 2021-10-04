window.addEventListener("DOMContentLoaded", async (_) => {
  await fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let length = Object.keys(data.archives).length;
      for (var i = 0; i < length; i++) {
        let key = Object.keys(data.archives[i])[0];
        let value = Object.values(data.archives[i]);
        createPage(key, value[0].archive);
      }
    })
    .catch((error) => alert(error));
  createDialog();
});

function createDialog() {
  const dialog_close = document.getElementById("dialog-close");
  let screen = document.getElementById("screen");
  let dialog = document.getElementById("dialog");
  dialog_close.addEventListener("click", function () {
    screen.style.overflowY = "auto";
    dialog.style.display = "none";
  });
}

function createPage(key, articles) {
  // Access screen
  const screenEl = document.getElementById("screen");

  // Create page
  let page = document.createElement("page-component");
  page.setAttribute("key", key);
  page.setAttribute("title", formatTitle(key));

  // Add page to screen
  screenEl.appendChild(page);

  // Access page body
  let body = document.getElementById(key + "-body");

  // Create sections
  let sections = [];
  let rows = 1;
  if (screen.availHeight < screen.availWidth) {
    rows = 3;
  }

  for (let i = 0; i < rows; i++) {
    let section = document.createElement("div");
    section.className += "section";
    sections.push(section);
    body.appendChild(section);
  }

  // Loop through articles
  if (articles != null) {
    let length = Object.keys(articles[0]).length;
    for (var i = 0; i < length; i++) {
      let heading = Object.keys(articles[0])[i];
      let article = Object.values(articles[0])[i];
      let content = article.content == null ? "" : article.content;
      let sources = article.sources == null ? [] : article.sources;
      let section = (i + 1) % 3 === 0 ? 2 : (i + 1) % 3 === 2 ? 1 : 0;
      createArticle(
        sections[sections.length === 3 ? section : 0],
        key,
        heading,
        content,
        sources
      );
    }
  }
}

function createArticle(body, key, heading, content, sources) {
  // console.log(sources);
  // Create article
  var article = document.createElement("article-component");
  article.setAttribute("key", key);
  article.setAttribute("heading", heading);
  article.setAttribute("content", content);

  body.appendChild(article);

  addSources(key, heading, sources);

  articleReadMoreClickListener(key, heading, content, sources);
}

function addSources(key, heading, sources) {
  var sourcesElement = document.getElementById(
    key + "-" + heading + "-sources"
  );

  let length = sources.length;
  for (let i = 0; i < length; i++) {
    let index = sources[i].index === undefined ? "_" : sources[i].index;
    let link = sources[i].link == null ? "" : sources[i].link;
    let desc = sources[i].desc == null ? link : sources[i].desc;
    var source = document.createElement("source-component");
    source.setAttribute("index", index);
    // Check if desc is a website link
    if (desc === link) source.classList.add("websiteLink");
    source.setAttribute("desc", desc);

    source.addEventListener("click", function () {
      window.open(link, "_blank").focus();
    });

    sourcesElement.appendChild(source);
  }
}

function articleReadMoreClickListener(key, heading, content, sources) {
  let sourcesEl = document.getElementById(key + "-" + heading + "-sources");
  if (content == "") {
    sourcesEl.style.marginTop = "0.5rem";
    let contentEl = document.getElementById(key + "-" + heading + "-content");
    contentEl.style.display = "none";
  } else {
    let screen = document.getElementById("screen");
    let dialog = document.getElementById("dialog");
    let dialog_heading = document.getElementById("dialog-heading");
    let dialog_title = document.getElementById("dialog-title");
    let dialog_content_p = document.getElementById("dialog-content-p");
    let dialog_sources = document.getElementById("dialog-sources");
    var expandEl = document.getElementById(
      key + "-" + heading + "-content-p-span-expand"
    );
    expandEl.addEventListener("click", function () {
      screen.style.overflowY = "hidden";
      dialog.style.display = "block";
      dialog_heading.innerHTML = heading;
      dialog_title.innerHTML = formatTitle(key);
      dialog_content_p.innerHTML = content;
      dialog_sources.innerHTML = "";
      for (let i = 0; i < sourcesEl.children.length; i++) {
        let source = sourcesEl.children[i].cloneNode();
        source.addEventListener("click", function () {
          let link = sources[i].link == null ? "" : sources[i].link;
          window.open(link, "_blank").focus();
        });
        dialog_sources.appendChild(source);
      }
    });
  }
}

// Util
function formatTitle(key) {
  var title = "";
  var i = 0;
  var character = "";
  while (i <= key.length) {
    let character = key.charAt(i);
    if (i === 0) {
      character = character.toUpperCase();
      title += character;
    } else {
      if (isNaN(character * 1)) {
        if (character == character.toUpperCase()) {
          title += " " + character;
        } else {
          title += character;
        }
      } else {
        title += character;
      }
    }
    i++;
  }
  return title;
}
