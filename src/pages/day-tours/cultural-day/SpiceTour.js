import React, {Component} from 'react';
import spiceMark from '../../../content/day-tours/cultural-day/SpiceTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class SpiceTour extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Spice Tour'
          page='day-tours/cultural-day'
          i='3'
        />
        <div className="info" id="info">
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
