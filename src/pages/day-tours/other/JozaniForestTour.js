import React, {Component} from 'react';
import forestMark from '../../../content/day-tours/other/JozaniForest.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class JozaniForestTour extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Jozani Forest'
          page='day-tours/other'
          i='1'
        />
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: forestMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default JozaniForestTour;
