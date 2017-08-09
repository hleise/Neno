import React, {Component} from 'react';
import blueMark from '../../../content/day-tours/boat/SafariBlue.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class SafariBlue extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Safari Blue'
          page='day-tours/boat'
          i='0'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: blueMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default SafariBlue;
