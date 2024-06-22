import React from 'react';

const Divider = ({ text }) => {
  return (
    <div className="divider">
      <hr />
      <span>{text}</span>
      <hr />
    </div>
  );
};

export default Divider;