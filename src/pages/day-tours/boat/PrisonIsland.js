import React, {Component} from 'react';
import prisonMark from '../../../content/day-tours/boat/PrisonIsland.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class PrisonIsland extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Prison Island'
          page='day-tours/boat'
          i='4'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: prisonMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default PrisonIsland;
