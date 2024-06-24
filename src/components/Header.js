import React from 'react';

const Header = () => {
  return (
    <div className="header mb-4">
      <h1 className="display-4">Olá,</h1>
      <p>Acesse sua conta ou<br className="conditional-br d-none d-sm-inline" /> cadastre-se!</p>
    </div>
  );
};

export default Header;
