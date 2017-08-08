import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner" onMouseDown={this.props.toggleMenu}>
        <div className="banner-title">
          <h1>{this.props.sectionTitle}</h1>
          <h2>Click here to see more...</h2>
        </div>
       <img className='banner-image' src={require("../img/" + this.props.page + "/" + this.props.i + ".jpg")} />
      </div>
    );
  }
}

export default Banner;
