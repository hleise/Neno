import React, { Component } from 'react';
import ungujaMark from '../../../content/UngujaTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class UngujaUkuuBoatTrip extends Component {
  render() {
    return (
      <div className="unguja-page">
          <div className="unguja-banner">
            <h1>Unguja Ukuu Boat Trip</h1>
          </div>
          <div className="unguja-info">
           <HorizontalTextSection>
            <div className='unguja-markdown' dangerouslySetInnerHTML={{__html: ungujaMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default UngujaUkuuBoatTrip;
