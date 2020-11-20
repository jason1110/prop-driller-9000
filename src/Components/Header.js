import React from 'react';

function Header(props) {


const handleClick = () => {
  props.toggleImages()
}

  return (
    <header>
      <img onClick={handleClick}
        src = {props.proptimusLogo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
