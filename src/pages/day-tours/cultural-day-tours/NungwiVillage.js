import React, {Component} from 'react';
import nunMark from '../../../content/day-tours/cultural-day-tours/NunVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class Nungwi extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Nungwi Village'
          page='day-tours/cultural-day-tours'
          i='2'
        />
        <div className="info" id="info">
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
