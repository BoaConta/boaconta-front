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
    <Toaster
      richColors
      toastOptions={{
        style: {
          background: "#FCE07E",
          color: "#414141",
          borderColor: "#803D00",
        },
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
