import React, {Component} from 'react';
import ungujaMark from '../../../content/day-tours/boat/UngujaTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class UngujaUkuuBoatTrip extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Unguja Ukuu Boat Trip'
          page='day-tours/boat'
          i='1'
        />
        <div className="info" id="info">
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
