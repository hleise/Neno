import React, { Component } from 'react';

class StaticBanner extends Component {
  render() {
    return (
      <div className="static-banner">
        <div className="banner-title">
          <h1>
            {this.props.bannerTitle}
          </h1>
        </div>
       <img className='banner-image' src={require('../img/' + this.props.page + "/" + this.props.i + ".jpg")} />
      </div>
    );
  }
}

export default StaticBanner;
