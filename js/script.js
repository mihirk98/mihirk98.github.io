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
});

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

  articleContentToggleClickListener(key, heading, content);

  addSources(key, heading, sources);
}

function articleContentToggleClickListener(key, heading, content) {
  var contentEl = document.getElementById(
    key + "-" + heading + "-content-p-span-expand"
  );
  var expandEl = document.getElementById(
    key + "-" + heading + "-content-p-span-content"
  );
  contentEl.addEventListener("click", function () {
    if (contentEl.innerHTML === "read more") {
      expandEl.innerHTML = content;
      contentEl.innerHTML = "show less";
    } else {
      expandEl.innerHTML = content.substring(
        0,
        content.length > 250 ? 250 : content.length
      );
      contentEl.innerHTML = "read more";
    }
  });
}

function addSources(key, heading, sources) {
  var sourcesElement = document.getElementById(
    key + "-" + heading + "-sources"
  );

  let length = sources.length;
  for (let i = 0; i < length; i++) {
    var source = document.createElement("div");
    source.innerHTML = `
    <div class="source">
      <h4>[${sources[i].index}]&nbsp</h4>
      <h4>${sources[i].desc}</h4>
    </div>`;
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
