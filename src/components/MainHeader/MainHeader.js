import React from 'react';
import Navigation from './Navigation';
import Toggle from './Toggle'
import classes from './MainHeader.module.css';
import AutnConText from '../../store/ThemeProvider';
import { useContext } from 'react/cjs/react.production.min';

const MainHeader = (props) => {

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      <Toggle/>
    </header>
  );
};

export default MainHeader;
