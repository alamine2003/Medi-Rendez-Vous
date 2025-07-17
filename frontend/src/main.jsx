import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Assurez-vous que le chemin est correct
import './index.css'; // Assurez-vous que le chemin vers votre CSS global est correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);