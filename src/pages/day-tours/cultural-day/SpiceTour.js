import React, { Component } from 'react';
import spiceMark from '../../../content/SpiceTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SpiceTour extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Spice Tour</h1>
            <img className='banner-image' src={require('../../../img/day-tours/cultural-day/3.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
                <div className='markdown' dangerouslySetInnerHTML={{__html: spiceMark}}>
                </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SpiceTour;
