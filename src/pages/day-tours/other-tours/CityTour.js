import React, {Component} from 'react';
import cityMark from '../../../content/day-tours/other-tours/ZanzibarCulturalTownTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class CityTour extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='City Tour'
          page='day-tours/other-tours'
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
