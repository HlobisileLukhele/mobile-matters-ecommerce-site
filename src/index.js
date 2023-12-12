import React from 'react';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider } from 'react-redux';
import { store } from './Features/Store.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(    
<Provider store={store}>
  <StrictMode>
    <App />
 </StrictMode>
</Provider>
);
    
