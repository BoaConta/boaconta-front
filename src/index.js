import React from 'react';
import ReactDOM from 'react-dom';
import './reset-global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/login-mobile.css';
import './assets/css/login-desktop.css';
import './assets/css/login-tablet-notebook.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
