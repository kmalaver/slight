import domParser from './domParser';
import setEventHandlers from './eventHandler';

// types
/** @typedef { import('./types').componentConfig } componentConfig */

const setState = (data = {}, instance) => {
  const handler = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], handler);
      } else {
        return target[key];
      }
    },
    set: function (target, name, value) {
      target[name] = value;
      console.log(target[name]);
      instance.render();
      return true;
    },
  };

  return new Proxy(data, handler);
};

class Component {
  /**
   * @param {componentConfig} options
   */
  constructor({ selector, template, functions, data }) {
    this.element =
      document.querySelector(selector) || document.createElement('div');
    this.template = template;
    this.functions = functions;
    this.data = setState(data, this);
    this._bindFunctions();
  }

  render() {
    this._removeChilds();
    const fragment = domParser(this.template(this.data));
    const list = fragment.querySelectorAll('[event]');
    for (const node of list) {
      setEventHandlers(node, this);
    }
    this.element.appendChild(fragment);
    console.log(this.element.outerHTML);

    return this.element.outerHTML;
  }

  _removeChilds() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  _bindFunctions() {
    for (const fun in this.functions) {
      this.functions[fun] = this.functions[fun].bind(this);
    }
  }
}

export default Component;
