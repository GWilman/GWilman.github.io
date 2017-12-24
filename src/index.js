import React from 'react';
import ReactDOM from 'react-dom';
import scollToComponent from 'react-scroll-to-component';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import './scss/style.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Home: false,
      Projects: false,
      About: false,
      Contact: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  switchVisibleComponent = (e) => {
    if (typeof e !== 'string') e.preventDefault();
    const element = document.getElementById( (typeof e === 'string') ? e : e.target.value );

    scollToComponent(element, {
      offset: 0,
      align: 'middle',
      duration: 1500
    });

  }

  handleHover({ target: { value }}) {
    this.setState({
      [value]: !this.state[value]
    });
  }

  render() {
    return (
      <div>
        { this.state &&
          <main>
            <Home
              switchVisibleComponent={this.switchVisibleComponent}
              handleHover={this.handleHover}
              HomeClass={this.state.Home}
              ProjectsClass={this.state.Projects}
              AboutClass={this.state.About}
              ContactClass={this.state.Contact}
            />
            <Projects />
            <About />
            <Contact />
          </main>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
