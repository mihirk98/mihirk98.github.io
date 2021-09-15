window.addEventListener("DOMContentLoaded", async (_) => {
  await fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let length = Object.keys(data.archives).length;
      for (var i = 0; i < length; i++) {
        let key = Object.keys(data.archives[i])[0];
        let title = formatTitle(key);
        let value = Object.values(data.archives[i]);
        createPage(key, title, value[0].archive);
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

function createPage(key, title, articles) {
  const pageTitle = title;

  // Access screen
  const screen = document.getElementById("screen");

  // Create page
  var page = document.createElement("page-component");
  page.setAttribute("key", key);
  page.setAttribute("title", title);

  // Add page to screen
  screen.appendChild(page);

  // Access page body
  var body = document.getElementById(key + "-body");

  // Loop through articles
  if (articles != null) {
    let length = Object.keys(articles[0]).length;
    for (var i = 0; i < length; i++) {
      let heading = Object.keys(articles[0])[i];
      let article = Object.values(articles[0])[i];
      let content = article.content == null ? "" : article.content;
      let sources = article.sources == null ? [] : article.sources;
      createArticle(body, key, heading, content, sources);
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

  articleReadMoreClickListener(key, heading, content);

  addSources(key, heading, sources);
}

function articleReadMoreClickListener(key, heading, content) {
  let screen = document.getElementById("screen");
  let dialog = document.getElementById("dialog");
  let dialog_content_p = document.getElementById("dialog-content-p");
  var expandEl = document.getElementById(
    key + "-" + heading + "-content-p-span-expand"
  );
  expandEl.addEventListener("click", function () {
    screen.style.overflowY = "hidden";
    dialog.style.display = "block";
    dialog_content_p.innerHTML = content;
  });
}

function addSources(key, heading, sources) {
  var sourcesElement = document.getElementById(
    key + "-" + heading + "-sources"
  );

  let length = sources.length;
  for (let i = 0; i < length; i++) {
    let index = sources[i].index;
    let link = sources[i].link == null ? "" : sources[i].link;
    let desc = sources[i].desc == null ? sources[i].link : sources[i].desc;
    var source = document.createElement("source-component");
    source.setAttribute("index", index);
    source.setAttribute("desc", desc);

    source.addEventListener("click", function () {
      window.open(link, "_blank").focus();
    });

    sourcesElement.appendChild(source);
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
