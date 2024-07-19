import React from 'react';
import ReactDOM from 'react-dom';
import './reset-global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/error.css'
import './login-mobile.css';
import './login-desktop.css';
import './login-tablet-notebook.css'
import { Toaster } from "sonner";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
