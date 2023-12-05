import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider } from 'react-redux';
import { store } from './Features/Store.jsx';


const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);
root.render(
<Provider store={store}>
    <App />
</Provider>
);
