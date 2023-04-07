import React, { createContext, useMemo, useState } from 'react';

export const initialState = {
  theme: {
    light: {
      background: 'white',
      color: 'black',
      value: 'light',
    },
    dark: {
      background: 'black',
      color: 'white',
      value: 'dark',
    },
  },
  data: [],
  favDentists: JSON.parse(localStorage.getItem('favDentists')) || [],
};

export const ContextGlobal = createContext(initialState);

export function ContextProvider({ children }) {
  // Maneja el estado de la data
  const [data, setData] = useState(initialState.data);
  const dataProvider = useMemo(() => ({ data, setData }), [data, setData]);

  // Maneja el estado del theme
  const [theme, setTheme] = useState(initialState.theme.light);
  const toggleTheme = () => {
    if (initialState.theme.dark === theme) setTheme(initialState.theme.light);
    else setTheme(initialState.theme.dark);
  };
  const themeProvider = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  // Maneja el estado de los dentistas marcados como favoritos
  const [favDentists, setFavDentists] = useState(initialState.favDentists);
  const favDentistsProvider = useMemo(() => ({ favDentists, setFavDentists }), [favDentists, setFavDentists]);

  return (
    <ContextGlobal.Provider value={{ dataProvider, themeProvider, favDentistsProvider }}>
      {children}
    </ContextGlobal.Provider>
  );
}
