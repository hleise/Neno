import React, { Component } from 'react';
import ungujaMark from '../../../content/UngujaTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class UngujaUkuuBoatTrip extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Unguja Ukuu Boat Trip</h1>
            <img className='banner-image' src={require('../../../img/day-tours/boat/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: ungujaMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default UngujaUkuuBoatTrip;
