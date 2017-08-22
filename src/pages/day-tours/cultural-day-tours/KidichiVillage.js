import React, {Component} from 'react';
import kidMark from '../../../content/day-tours/cultural-day-tours/KidVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class Kidichi extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Kidichi Village'
          page='day-tours/cultural-day-tours'
          i='1'
        />
        <div className="info" id="info">
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
