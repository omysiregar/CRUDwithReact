import React from 'react';
import { createRoot } from 'react-dom/client'; // ganti disini
import App from './App';
import "bulma/css/bulma.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
