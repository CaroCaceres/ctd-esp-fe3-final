import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

// Routes
import { routes } from "./Routes/routes";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

// Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// Context
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
    <div className="App">
      <ContextProvider children={<Navbar />} />
      <Routes>
        <Route path={routes.home} element={
          <ContextProvider children={<Home />} />
        } />
        <Route path={routes.dentist} element={
          <ContextProvider children={<Detail />} />
        } />
        <Route path={routes.contact} element={
          <ContextProvider children={<Contact />} />
        } />
        <Route path={routes.favs} element={
          <ContextProvider children={<Favs />} />
        } />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
