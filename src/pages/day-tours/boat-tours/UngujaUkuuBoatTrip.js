import React, {Component} from 'react';
import ungujaMark from '../../../content/day-tours/boat-tours/UngujaTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class UngujaUkuuBoatTrip extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Unguja Ukuu Boat Trip'
          page='day-tours/boat-tours'
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
