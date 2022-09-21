import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App02 from './App02';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <App02 />
  </React.StrictMode>
)
