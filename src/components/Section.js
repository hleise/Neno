import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <div className="section-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
