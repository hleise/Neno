import React, {Component} from 'react';
import sunsetMark from '../../../content/day-tours/boat/SunsetCruise.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class SunsetDhowCruise extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Sunset Dhow Cruise'
          page='day-tours/boat'
          i='6'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: sunsetMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default SunsetDhowCruise;
