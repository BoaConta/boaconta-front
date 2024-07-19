import React from 'react';
import LoginForm from './components/LoginForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' theme="colored" draggable

      />
      <div className="app">
        <div className="wrapper">
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default App;
