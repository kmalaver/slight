function domParser(string) {
  const element = document.createRange().createContextualFragment(string);
  return element;
}

export default domParser;
