import React, {useContext} from 'react';

// Context
import {ContextGlobal} from './utils/global.context';

// Styles
import './Footer.css';

function Footer() {
  const { themeProvider } = useContext(ContextGlobal);

  return (
    <footer className={themeProvider.theme.value}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt="DH-logo" />
    </footer>
  );
}

export default Footer;
