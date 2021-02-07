function domParser(string) {
  const element = document.createRange().createContextualFragment(string);
  element.innerHTML = string;
  return element;
}

export default domParser;
