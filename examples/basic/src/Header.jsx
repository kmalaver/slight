import { Component, h } from 'slightjs';

// create a component
const Header = new Component({
  template: ({ title, subtitle }) => (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  ),
});

export default Header;
