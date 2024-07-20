import React from 'react';
import logoGoogle from '../assets/ico/Google.svg';
import PropTypes from 'prop-types';

const googleButton = ({ text, isGoogle, className }) => {
  return (
    <button className={className}>
      {text}
      {isGoogle && <img src={logoGoogle} alt="Google Logo" className="ms-2" />}
    </button>
  );
};

googleButton.propTypes = {
  text: PropTypes.string.isRequired,
  isGoogle: PropTypes.bool,
  className: PropTypes.string,
};

export default googleButton;