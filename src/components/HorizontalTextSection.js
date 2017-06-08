import React, { Component } from 'react';

class HorizontalTextSection extends Component {
  render() {
    return (
      <div className='horizontal-text-section'>
        <div className='horizontal-text-section-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HorizontalTextSection;
