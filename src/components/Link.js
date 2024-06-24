import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ text, href }) => {
  return (
    <a className="link" href={href}>
      {text}
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
