import React, { Component } from 'react';

class TransformersSection extends Component {




eachImage = () => {   
  return this.props.proptimusii.map(proptimus => {
    return (<img
    className = 'transformer'
    src = {proptimus.url}
    alt = {proptimus.name} 
    />
  )
})
}

  render() {

    return (
      <section className = "transformers-section">
        {this.eachImage()}
      </section>
    );
  }
}

export default TransformersSection;
