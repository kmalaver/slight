# Slight

Slight is a small library for reactive user interfaces creating. Only weighs **1KB**

##install

```shell
npm install slightjs
```

##Usage

Basic component

```js
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
```

Root Component

```js
import { Component, h } from 'slightjs';
import Header from './Header';

const App = new Component(
  {
    // here you can put the component data
    data: {
      counter: 0,
    },

    // nesting other component and passing props
    template() {
      return (
        <div>
          <Header title="slight" subtitle="example" />
          <main>{this.data.counter}</main>
          <button>increment</button>
        </div>
      );
    },
  },
  // if you pass an id the component will be rendered
  'app',
);
```

Reactivity. The component will be rendered each time the data change

```js
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
```
