import React, { Component } from 'react';
import sunsetMark from '../../../content/SunsetCruise.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SunsetDhowCruise extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Sunset Dhow Cruise</h1>
            <img className='banner-image' src={require('../../../img/day-tours/boat/6.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: sunsetMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SunsetDhowCruise;
