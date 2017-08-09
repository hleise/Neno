import React, {Component} from 'react';
import cityMark from '../../../content/day-tours/other/ZanzibarCulturalTownTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class CityTour extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='City Tour'
          page='day-tours/other'
          i='0'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: cityMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default CityTour;
