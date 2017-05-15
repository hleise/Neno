import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Section;
