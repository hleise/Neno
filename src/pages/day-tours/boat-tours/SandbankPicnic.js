import React, {Component} from 'react';
import sandMark from '../../../content/day-tours/boat-tours/SandbankPicnic.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class SandbankPicnic extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Sandbank Picnic'
          page='day-tours/boat-tours'
          i='5'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: sandMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default SandbankPicnic;
