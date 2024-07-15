import React, { useState } from 'react';
import PropTypes from 'prop-types';
import eyeOn from '../assets/img/EyeOn.svg';

const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <input
          className="form-control"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button 
            type="button" 
            className="btn btn-outline-secondary eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={eyeOn} alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'} />
          </button>
        </div>
      </div>
    </div>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordField;
