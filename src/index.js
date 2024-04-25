import React from 'react';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(    
  <StrictMode>
    <App />
 </StrictMode>
);
    
