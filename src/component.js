import setEventHandlers from './eventHandler';
import setState from './setState';

/** @typedef { import('./types').componentConfig } componentConfig */

class Component {
  /** @param {componentConfig} */
  constructor({ selector, template, data }) {
    this.element =
      document.querySelector(selector) || document.createElement('div');
    this.template = template.bind(this);
    this.data = setState(data, this);
    this.props = {};
  }

  render() {
    const newElement = this.template(this.props);

    this.element.firstChild?.remove();
    this.element.appendChild(newElement);

    return this.element;
  }

  getData() {
    return this.data;
  }
}

export default Component;
