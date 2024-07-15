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
          display: "flex",
          padding: "0.5rem 1rem",
          alignItems: "flex-start",
          gap: "0.5rem",
          alignSelf: "stretch",
          background: "#FFF4D6",
          color: "#414141",
          border: "1px solid",
          borderColor: "#FCE07E",
          borderRadius: "0.5rem",
        },
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
