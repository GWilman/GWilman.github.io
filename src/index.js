import React from 'react';
import ReactDOM from 'react-dom';
import scollToComponent from 'react-scroll-to-component';

import Home from './components/statics/Home';
import Projects from './components/statics/Projects';
import About from './components/statics/About';
import Contact from './components/statics/Contact';


class App extends React.Component {

  switchVisibleComponent = (e) => {
    if (typeof e !== 'string') e.preventDefault();
    const element = document.getElementById( (typeof e === 'string') ? e : e.target.value );

    scollToComponent(element, {
      offset: 0,
      align: 'middle',
      duration: 1500
    });

  }

  render() {
    return (
      <div>
        <main>
          <Home switchVisibleComponent={this.switchVisibleComponent} />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
