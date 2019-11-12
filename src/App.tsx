import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';
import Header from './components/Header';

const particlesOptions = {
  particles: {
    number: {
      value: 89,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#668daf"
    },
    line_linked: {
      color: "#668daf",
    },
  }
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Particles className="particles-js" params={particlesOptions} />
      </div>
    </BrowserRouter>
  );
}

export default App;
