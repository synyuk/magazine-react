import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from "./Components/Products/Products";
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
    <>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </>
);