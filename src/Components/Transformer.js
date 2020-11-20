import React from 'react';

function Transformer(props) {

const { transformer } = props
const { url, name } = transformer



  return (
    <div>
      <img
        onClick={props.onClick}
        className = 'transformer'
        src = {url}
        alt = {name} 
        key = {transformer.id}
      />
    </div>
  );
}

export default Transformer;
