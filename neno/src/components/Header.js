import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="section-header">
      {this.props.name}
      </div>
    );
  }
}

export default Header;
