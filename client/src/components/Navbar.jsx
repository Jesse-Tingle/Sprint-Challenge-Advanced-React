import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  //  calling the useDarkMode function and 
  //  passing in initial state of darkMode
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    //setting the state of setDarkMode to NOT darkMode
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Trending Women's World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;