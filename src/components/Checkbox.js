import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label }) => {
  return (
    <div className="form-check">
      <input type="checkbox" id="keep-connected" className="form-check-input" />
      <label htmlFor="keep-connected" className="form-check-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
