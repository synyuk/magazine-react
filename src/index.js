import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import App from './App';
import {Provider} from "react-redux";
import store from './app/store/store';

const root = ReactDOM.createRoot(document.querySelector('.container'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);