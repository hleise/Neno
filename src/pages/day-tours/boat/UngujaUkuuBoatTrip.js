import React, {Component} from 'react';
import ungujaMark from '../../../content/day-tours/boat/UngujaTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class UngujaUkuuBoatTrip extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Unguja Ukuu Boat Trip</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/boat/1.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: ungujaMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default UngujaUkuuBoatTrip;
