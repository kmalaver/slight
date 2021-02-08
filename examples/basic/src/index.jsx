import s from '../../../src/createElement';
import Component from '../../../src/component';

/** @jsx s */

const Header = new Component({
  template: () => (
    <header>
      <h1>Header</h1>
    </header>
  ),
});

const App = new Component({
  selector: '#app',
  template: () => (
    <div>
      <Header />
      <main></main>
      <footer>footer</footer>
    </div>
  ),
});

App.render();
