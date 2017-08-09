import React, {Component} from 'react';
import sandMark from '../../../content/day-tours/boat/SandbankPicnic.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class SandbankPicnic extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Sandbank Picnic'
          page='day-tours/boat'
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
