import React, {Component} from 'react';
import nunMark from '../../../content/day-tours/cultural-day/NunVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class Nungwi extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Nungwi Village'
          page='day-tours/cultural-day'
          i='2'
        />
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: nunMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Nungwi;
