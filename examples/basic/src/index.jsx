import { Component, createElement as h } from '@slight';
import Header from './components/Header';

const App = new Component({
  selector: '#app',
  data: {
    counter: 0,
  },

  template() {
    const data = this.getData();

    const increment = () => {
      data.counter++;
      console.log('hola');
    };

    return (
      <div>
        <Header title="title default" />
        <main>{data.counter}</main>
        <button type="button" s-click={increment}>
          increase
        </button>
        <footer>footer</footer>
      </div>
    );
  },
});

App.render();
