import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {


  state = {
    transformerIndex: 0
  }

eachImage = () => {   
      return this.props.proptimusii.map(proptimus => { 
        return <Transformer transformer={ proptimus } /> 
      }
    )}

  
showOneImage = () => {
  return <Transformer 
  transformer={this.props.proptimusii[this.state.transformerIndex]}
  onClick={this.cycleTransformer}
  />
}


cycleTransformer = () => {
  (this.state.transformerIndex < this.props.proptimusii.length - 1)
  ? this.setState(prevState => ({transformerIndex: prevState.transformerIndex + 1 }))
  : this.setState ({transformerIndex: 0})
}

  render() {

    return (
      <div>
      <section className = "transformers-section"> {this.showOneImage()} </section>
      </div>
    );
  }
}

export default TransformersSection;
