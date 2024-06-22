import React, { useState } from 'react';
import eyeOn from '../assets/img/EyeOn.svg';

const PasswordField = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field">
      <label>{label}</label>
      <input 
        type={showPassword ? 'text' : 'password'} 
        placeholder={placeholder} 
      />
      <button 
        type="button" 
        onClick={() => setShowPassword(!showPassword)}
      >
        <img src={eyeOn} alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'} />
      </button>
    </div>
  );
};

export default PasswordField;