/** @typedef { import('./types').createElementType } createElementType */

import setEventHandler from './eventHandler';

const EVENT_PREFIX = 'on';

/**
 * creates a htmlElement passing tag and attributes
 * @type {createElementType}
 */
const createElement = function (tag, attrs, ...children) {
  if (typeof tag !== 'object') {
    const element = document.createElement(tag);
    for (const name in attrs) {
      if (name.substr(0, EVENT_PREFIX.length) === EVENT_PREFIX) {
        setEventHandler(
          element,
          name.substring(EVENT_PREFIX.length),
          attrs[name],
        );
      } else if (name && attrs.hasOwnProperty(name)) {
        const value = attrs[name];
        if (value === true) {
          element.setAttribute(name, name);
        } else if (value !== false && value != null) {
          element.setAttribute(name, value.toString());
        }
      }
    }

    for (const child of children) {
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
