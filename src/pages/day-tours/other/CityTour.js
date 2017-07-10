import React, {Component} from 'react';
import cityMark from '../../../content/day-tours/other/ZanzibarCulturalTownTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class CityTour extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>City Tour</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/other/0.jpg')}/>
        </div>
        <div className="info">
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
