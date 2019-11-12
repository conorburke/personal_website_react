import React from 'react';
import Particles from 'react-particles-js';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 89,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: 'transparent', color: '#f7f7f7'}}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Particles className="particles-js" params={particlesOptions} />
      <h1>Conor Burke</h1>
      <h2>Software Engineer. Web Develper. AI Graduate Student.</h2>
      <div className="icon-container icons">
          <a href="https://www.linkedin.com/in/conorburke89/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
          <a href="https://github.com/conorburke" target="_blank"rel="noopener noreferrer">
            <i className="fab fa-github fa-4x"></i>
          </a>
        </div>
    </div>
  );
}

export default App;
