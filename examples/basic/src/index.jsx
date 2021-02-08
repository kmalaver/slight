import { Component, createElement as h } from '@slight';
import Header from './components/Header';

const App = new Component(
  {
    data: {
      counter: 0,
    },

    template() {
      const data = this.data;

      const increment = () => {
        data.counter++;
        console.log(data.counter);
      };

      return (
        <div>
          <Header title="title default" />
          <main>{data.counter}</main>
          <button type="button" onclick={increment}>
            increase
          </button>
          <footer>footer</footer>
        </div>
      );
    },
  },
  'app',
);
