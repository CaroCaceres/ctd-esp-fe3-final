import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { ContextGlobal, initialState } from './utils/global.context'

// Styles
import './Navbar.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeProvider } = useContext(ContextGlobal)
  const [themeIcon, setThemeIcon] = useState('☀️')

  const toggleTheme = () => {
    themeProvider.toggleTheme();
    setThemeIcon(themeProvider.theme === initialState.theme.light ? '🌙' : '☀️');
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <span id="logo">
        <Link to="/"><strong><font color="red">D</font>H</strong> Dentists</Link>
      </span>
      <span>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button id="themeToggler" onClick={toggleTheme}>{themeIcon}</button>
      </span>
    </nav>
  )
}

export default Navbar