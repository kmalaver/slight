import Component from './component';

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
  template: () =>
    ` 
      ${Header.render()}
      <h1>title</h1>
      <h2>subtitle</h1>
      ${List.render()}
    `,
});

App.render();
