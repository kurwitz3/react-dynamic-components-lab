import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
   let newValue;
    if(this.props.opacity >= 0.2){
      newValue = <ColorBox opacity={this.props.opacity - 0.1} />
    }else{
      newValue = null
    }
      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {newValue}
       </div>
    )
  }

}

