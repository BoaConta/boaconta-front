import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ text }) => {
  return (
    <div className="divider d-flex align-items-center my-3">
      <hr className="flex-grow-1" />
      <span className="mx-2">{text}</span>
      <hr className="flex-grow-1" />
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Divider;
