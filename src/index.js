import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import router from "./routes/routes.js";

const root = ReactDOM.createRoot(document.querySelector('.container'));

root.render(
    <React.StrictMode>
        <Header/>
            {/*<BrowserRouter>     */}
                {/*  <Routes>*/}
                {/*    <Route path="/" element={<><Hero /><Products /></>} />*/}
                {/*    <Route path="/about" element={<About/>}/>*/}
                {/*    <Route path="/company" element={<Company/>}/>*/}
                {/*    <Route path="/blog" element={<Blog/>}/>*/}
                {/*    <Route path="product/:id" element={<ProductPage />} />*/}
                {/*</Routes>*/}
            {/*</BrowserRouter>*/}
        <RouterProvider router={router} />
        <Footer/>


    </React.StrictMode>
);