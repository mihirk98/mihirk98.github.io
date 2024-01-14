function galleryExpand(element) {
  const softwares = document.getElementById("softwares");
  const close = document.getElementById("close");

  softwares.style.overflow = "hidden";
  close.style.display = "block";

  const parent = element.parentElement.closest("section");
  const gallery = element.parentElement.closest("div");

  const images = parent.querySelectorAll("img");
  for (image of images) {
    image.classList.add("galley-img-expand");
    image.style.cursor = "auto";
  }

  parent.style.position = "absolute";
  parent.style.width = "calc(100vw - var(--spacing-normal))";
  parent.style.top = 0;
  parent.style.bottom = 0;
  parent.style.left = 0;
  parent.style.marginTop = 0;
  parent.style.marginBottom = 0;
  parent.style.paddingLeft = "var(--spacing-normal)";
  parent.style.paddingTop = "var(--header-height)";
  parent.style.backgroundColor = "#fffffff5";
  gallery.classList.add("gallery-expand");

  close.addEventListener("click", function () {
    softwares.style.overflow = "auto";
    close.style.display = "none";
    for (image of images) {
      image.classList.remove("galley-img-expand");
      image.style.cursor = "pointer";
    }
    parent.style.position = "static";
    parent.style.width = "auto";
    parent.style.marginTop = "var(--spacing-large)";
    parent.style.marginBottom = "var(--spacing-large)";
    parent.style.paddingLeft = 0;
    parent.style.paddingTop = 0;
    parent.style.backgroundColor = "none";
    gallery.classList.remove("gallery-expand");
  });
}
