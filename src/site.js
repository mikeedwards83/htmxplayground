function cleanCodeBlocks() {
  const codeBlocks = document.querySelectorAll(".astro-code");

  codeBlocks.forEach((codeBlock) =>
    codeBlock.style.setProperty("background-color", "unset"),
  );
}

cleanCodeBlocks();

document.body.addEventListener("htmx:beforeOnLoad", function (evt) {
  if (
    evt.detail.xhr.status === 400 ||
    evt.detail.xhr.status === 500 ||
    evt.detail.xhr.status === 404
  ) {
    evt.detail.shouldSwap = true;
    evt.detail.isError = false;
  }
});

document.body.addEventListener("htmx:afterSwap", function (evt) {
  cleanCodeBlocks();
});

window.copyLink = function (anchor) {
  const url = `${window.location.href.split("#")[0]}#${anchor}`;
  // Get the text field
  // Copy the text inside the text field
  navigator.clipboard.writeText(url);
};
