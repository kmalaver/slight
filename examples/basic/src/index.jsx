import { Component, h } from 'slightjs';
import Header from './Header';

const App = new Component(
  {
    data: {
      counter: 0,
      title: 'slight',
    },

    template() {
      // can be passed functions to element events
      // using on + eventname
      const increment = () => {
        this.data.counter++;
      };

      return (
        <div>
          <Header title={this.data.title} subtitle="example" />
          <main>{this.data.counter}</main>
          <button onclick={increment}>increment</button>
        </div>
      );
    },
  },
  'app',
);

// data also can be modified externally
App.data.title = 'New Title';
