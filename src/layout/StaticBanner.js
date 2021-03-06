import React, { Component } from 'react';
import DownArrow from '../components/DownArrow'

class StaticBanner extends Component {
  render() {
    return (
      <div className="static-banner">
        <div className="banner-title">
          <h1>{this.props.bannerTitle}</h1>
        </div>
        <div className="banner-description">
        </div>
        <img className='banner-image' src={require('../img/' + this.props.page + "/" + this.props.i + ".jpg")} />
        <DownArrow section='info'/>
      </div>
    );
  }
}

export default StaticBanner;
