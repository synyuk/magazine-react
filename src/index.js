import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Products from "./Components/Products/Products.jsx";
import Footer from './Components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
    <React.StrictMode>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </React.StrictMode>
);