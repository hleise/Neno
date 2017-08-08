import React, {Component} from 'react';
import spiceMark from '../../../content/day-tours/cultural-day/SpiceTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class SpiceTour extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Spice Tour'
          page='day-tours/cultural-day'
          i='3'
        />
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
