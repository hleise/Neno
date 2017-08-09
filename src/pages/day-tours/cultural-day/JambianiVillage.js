import React, {Component} from 'react';
import jamMark from '../../../content/day-tours/cultural-day/JamVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class Jambiani extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Jambiani Village'
          page='day-tours/cultural-day'
          i='0'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: jamMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Jambiani;
