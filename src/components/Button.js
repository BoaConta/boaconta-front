import React from 'react';
import logoGoogle from '../assets/img/Google.svg'


const Button = ({ text, isGoogle }) => {
  return (
    <button className={isGoogle ? 'google-button' : 'button'}>
      {text}
      {isGoogle && <img src={logoGoogle} alt="Google Logo" className="google-logo" />}
    </button>
  );
};

export default Button;