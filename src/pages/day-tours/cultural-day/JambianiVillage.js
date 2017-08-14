import React, {Component} from 'react';
import jamMark from '../../../content/day-tours/cultural-day/JamVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class Jambiani extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Jambiani Village'
          page='day-tours/cultural-day'
          i='0'
          downArrow='true'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: jamMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Jambiani;
