import React, { Component } from 'react';
import Header from './Header.js';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <Header name={this.props.name}/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Section;
