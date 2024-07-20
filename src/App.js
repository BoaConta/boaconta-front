import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Close from './assets/ico/Closed.svg';
import './assets/css/toaster.css';
import LoginPage from './pages/LoginPage';


const CloseButton = ({ closeToast }) => (
 <img src={Close} onClick={closeToast} alt='Close toast button' style={{cursor: 'pointer'}}
 />
);

const App = () => {
  return (
    <>
    <Router>
      <ToastContainer position='top-center' theme="colored" draggable closeButton={CloseButton} />
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} /> 
          {/* Como por enquanto só temos a página de login, ela será nossa única rota */}
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
