import Component from './component';

const App = new Component({
  selector: '#app',
  data: {
    list: [1, 2, 3, 4, 5],
  },
  template: ({ list }) =>
    `
      <h1>title</h1>
      <h2>subtitle</h1>
      <ul>
        ${list.map((el) => `<li>${el}</li>`).join('')}
      </ul>
    `,
});
