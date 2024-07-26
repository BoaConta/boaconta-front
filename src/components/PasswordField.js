import React, { useState } from 'react';
import eyeOn from '../assets/img/EyeOn.svg';

const PasswordField = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <input
          className="form-control"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
        />
        <div className="input-group-append">
          <button 
            type="button" 
            className="btn btn-outline-secondary eye-btn" //O botão está sumindo durante o input.
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={eyeOn} alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;