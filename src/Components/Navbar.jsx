import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { ContextGlobal, initialState } from './utils/global.context';

// Styles
import './Navbar.css';

function Navbar() {
  const { themeProvider } = useContext(ContextGlobal);
  const [themeIcon, setThemeIcon] = useState('☀️');

  const toggleTheme = () => {
    themeProvider.toggleTheme();
    setThemeIcon(themeProvider.theme === initialState.theme.light ? '🌙' : '☀️');
  };

  return (
    <nav className={themeProvider.theme.value}>
      <span id="logo">
        <Link to="/">
          <strong>
            <font color="red">D</font>
            H
          </strong>
          Dentists
        </Link>
      </span>
      <span>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button type="button" id="themeToggler" onClick={toggleTheme}>{themeIcon}</button>
      </span>
    </nav>
  );
}

export default Navbar;
