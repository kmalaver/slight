import setEventHandler from './eventHandler';

const createElement = function (tag, attrs) {
  if (typeof tag !== 'object') {
    const element = document.createElement(tag);
    for (const name in attrs) {
      if (name.substr(0, 2) === 's-') {
        setEventHandler(element, name, attrs[name]);
      } else if (name && attrs.hasOwnProperty(name)) {
        const value = attrs[name];
        if (value === true) {
          element.setAttribute(name, name);
        } else if (value !== false && value != null) {
          element.setAttribute(name, value.toString());
        }
      }
    }

    for (let i = 2; i < arguments.length; i++) {
      const child = arguments[i];
      if (child || child === 0) {
        element.appendChild(
          child.nodeType == null
            ? document.createTextNode(child.toString())
            : child,
        );
      }
    }
    return element;
  }

  tag.props = attrs;
  return tag.render();
};

export default createElement;
