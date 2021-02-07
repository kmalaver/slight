import s from './createElement';
import Component from './component';

/** @jsx s */

const List = new Component({
  data: {
    list: [1, 2, 3, 4, 5],
  },
  template: ({ list }) =>
    `
      <ul>
        ${list.map((el) => `<li>${el}</li>`).join('')}
      </ul>
    `,
});

const Header = new Component({
  template: () => `
    <header>hi i'm a header</header>
  `,
});

const App = new Component({
  selector: '#app',
  template: () => ``
});

App.render();

const Comp = () => {

};

console.log(<div id="holaYa">hola</div>);
