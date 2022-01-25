const elements = {
  lbTitle: document.getElementById("lbTitle"),
  lbText: document.getElementById("lbText"),
  lbUrl: document.getElementById("lbUrl")
}

window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  const sharedTitle = parsedUrl.searchParams.get('title');
  const sharedText = parsedUrl.searchParams.get('text');
  const sharedUrl = parsedUrl.searchParams.get('url');

  elements.lbText.innerText = sharedText;
  elements.lbTitle.innerText = sharedTitle;
  elements.lbUrl.innerText = sharedUrl;
});