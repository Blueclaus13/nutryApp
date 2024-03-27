// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export async function loadHeaderFooter() {
  const footer = document.querySelector("footer");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const header = document.querySelector("header");
  const headerTemplate = await loadTemplate("../partials/header.html");
  renderWithTemplate(footerTemplate, footer);
  renderWithTemplate(headerTemplate, header);
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  clear = false,
  position = "afterbegin"
) {
  const htmlItems = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlItems.join(""));
}

export function renderTemplate(
  templateFn,
  parentElement,
  clear = false,
  position = "afterbegin",
) {
  const element = document.querySelector(parentElement);
  if (clear) {
    element.innerHTML = "";
  }
  element.insertAdjacentHTML(position, templateFn());
}
