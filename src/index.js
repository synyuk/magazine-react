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


const mass = ['$129','$9','$12'];
let summ = 0;
for (let i = 0; i < mass.length; i++) {
    summ += eval(mass[i].toString().slice(1));
}
//console.log(summ);
