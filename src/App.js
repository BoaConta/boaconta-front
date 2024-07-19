import React from 'react';
import LoginForm from './components/LoginForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from './assets/img/Closed.svg';


const CloseButton = ({ closeToast }) => (
 <img src={Close} onClick={closeToast} alt='Close toast button' style={{cursor: 'pointer'}}
 />
);

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' theme="colored" draggable closeButton={CloseButton}

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
