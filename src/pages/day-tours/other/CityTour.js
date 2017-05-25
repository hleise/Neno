import React, { Component } from 'react';
import cityMark from '../../../content/ZanzibarCulturalTownTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class CityTour extends Component {
  render() {
    return (
      <div className="city-page">
          <div className="city-banner">
            <h1>City Tour</h1>
          </div>
          <div className="city-info">
           <HorizontalTextSection>
            <div className='city-markdown' dangerouslySetInnerHTML={{__html: cityMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default CityTour;
