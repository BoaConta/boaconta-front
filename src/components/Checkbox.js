import React from 'react';

const Checkbox = ({ label }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="keep-connected" />
      <label htmlFor="keep-connected">{label}</label>
    </div>
  );
};

export default Checkbox;