/** @typedef { import('./types').componentConfig } componentConfig */

import setState from './setState';

class Component {
  /**
   * @param {componentConfig}
   * @param {string} selector
   */
  constructor({ template, data }, selector) {
    this.template = template.bind(this);
    this.data = setState(data, this);
    this.props = {};

    if (selector) {
      document.getElementById(selector).appendChild(this.render());
    }
  }

  render() {
    const newElement = this.template(this.props);

    // replace element and reasign reference
    this.element?.replaceWith(newElement);
    this.element = newElement;

    return this.element;
  }
}

export default Component;
