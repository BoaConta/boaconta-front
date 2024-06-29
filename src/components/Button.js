import React from 'react';
import logoGoogle from '../assets/img/Google.svg';
import PropTypes from 'prop-types';

const Button = ({ text, isGoogle, className }) => {
  return (
    <button className={className}>
      {text}
      {isGoogle && <img src={logoGoogle} alt="Google Logo" className="ms-2" />}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isGoogle: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;