import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner" onMouseDown={this.props.toggleMenu}>
        <div className="section-title">
          <h1>
            {this.props.sectionTitle}
          </h1>
        </div>
       <img className='section-image' src={require("../img/" + this.props.page + "/" + this.props.i + ".jpg")} />
      </div>
    );
  }
}

export default Banner;
