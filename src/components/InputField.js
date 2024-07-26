import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-field mb-3">
      <label className="form-label">{label}</label>
      <input type={type} className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
