import React, {Component} from 'react';
import kidMark from '../../../content/day-tours/cultural-day/KidVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class Kidichi extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Kidichi Village'
          page='day-tours/cultural-day'
          i='1'
        />
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: kidMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Kidichi;
