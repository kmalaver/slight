import setEventHandlers from './eventHandler';
import setState from './setState';

// types
/** @typedef { import('./types').componentConfig } componentConfig */

class Component {
  /** @param {componentConfig} */
  constructor({ selector, template, functions, data }) {
    this.element =
      document.querySelector(selector) || document.createElement('div');
    this.template = template;
    this.functions = functions;
    this.data = setState(data, this);
    this._bindFunctions();
  }

  render(props) {
    this._removeChilds();
    const template = this.template(this.data, props);
    const list = template.querySelectorAll('[s-event]');
    for (const node of list) {
      setEventHandlers(node, this);
    }
    this.element.appendChild(template);
    return this.element;
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
