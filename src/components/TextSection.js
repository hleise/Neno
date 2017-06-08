import React, { Component } from 'react';

class TextSection extends Component {
  render() {
    return (
      <div className='text-section'>
        <div className='text-section-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TextSection;
