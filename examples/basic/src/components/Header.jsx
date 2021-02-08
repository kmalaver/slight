import { Component, createElement as h } from '@slight';

const Header = new Component({
  data: {
    active: false,
  },

  template({ title }) {
    const data = this.getData();
    const change = () => {
      data.active = !data.active;
    };

    return (
      <header>
        <h1>{title}</h1>
        <button s-click={change}>{data.active ? 'active' : 'unactive'}</button>
      </header>
    );
  },
});

export default Header;
