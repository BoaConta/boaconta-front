import React from 'react';
import LoginForm from './components/LoginForm';
import wrapperLogin from './assets/img/wapperlogin.png'

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <img src={wrapperLogin} className='wrapper-pic'/>
      </div>
      <LoginForm />
    </div>
  );
};

export default App;