import React from 'react';

const Link = ({ text, href }) => {
  return (
    <a className="link" href={href}>
      {text}
    </a>
  );
};

export default Link;