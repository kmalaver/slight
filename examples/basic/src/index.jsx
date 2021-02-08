/** @jsx s */
import s from '../../../src/createElement';
import Component from '../../../src/component';


const Header = new Component({
  template: (_, props) => (
    <header>
      <h1>{props.title}</h1>
    </header>
  ),
});

const App = new Component({
  selector: '#app',
  data: {
    counter: 0
  },
  functions: {
    increment() {
      console.log(this)
      this.data.counter++
    }
  },

  template: ({counter}) =>{ 
    return(
    <div>
      <Header title='title default' />
      <main>{counter}</main>
      <button s-event s-click='increment'>increase</button>
      {counter%2?
      <p>inpar</p>  : ''
      }
      <footer>footer</footer>
    </div>
  )}
});
App.render();
