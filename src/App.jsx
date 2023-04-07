import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import routes from './Routes/routes';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';

// Components
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// Styles
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
