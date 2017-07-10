import React, {Component} from 'react';
import spiceMark from '../../../content/day-tours/cultural-day/SpiceTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class SpiceTour extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Spice Tour</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/cultural-day/3.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: spiceMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default SpiceTour;
