import React, {Component} from 'react';
import dolphinMark from '../../../content/day-tours/boat/DolphinTours.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class DolpinTour extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Dolphin Tour'
          page='day-tours/boat'
          i='3'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: dolphinMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default DolpinTour;
