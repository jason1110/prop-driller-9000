import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.proptimusLogo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
