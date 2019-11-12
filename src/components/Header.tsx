import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'transparent', color: '#f7f7f7'}}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button color="inherit" component={props => <Link to={'/'} {...props}/>}>Home</Button>
          <Button color="inherit" component={props => <Link to={'/projects'} {...props}/>}>Projects</Button>
          <Button color="inherit" component={props => <Link to={'/aboutme'} {...props}/>}>About Me</Button>
          <Button color="inherit" component={props => <Link to={'/contact'} {...props}/>}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
