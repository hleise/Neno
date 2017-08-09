import React, {Component} from 'react';
import chumbeMark from '../../../content/day-tours/boat/ChumbeIslandTrip.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class ChumbeIsland extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Chumbe Island'
          page='day-tours/boat'
          i='2'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: chumbeMark}}/>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default ChumbeIsland;
