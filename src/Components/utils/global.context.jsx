import { createContext, useMemo, useState } from "react";

export const initialState = {
  theme: {
    light: {
      background: "white",
      color: "black",
    },
    dark: {
      background: "black",
      color: "white",
    }
  },
  data: []
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // Maneja el estado de la data
  const [data, setData] = useState(initialState.data);
  const dataProvider = useMemo(() => ({ data, setData }), [data, setData]);

  // Maneja el estado del theme
  const [theme, setTheme] = useState(initialState.theme.light);
  const toggleTheme = () => {
    initialState.theme.dark === theme
    ? setTheme(initialState.theme.light)
    : setTheme(initialState.theme.dark);
  };
  const themeProvider = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ContextGlobal.Provider value={{dataProvider, themeProvider}}>
      {children}
    </ContextGlobal.Provider>
  );
};
