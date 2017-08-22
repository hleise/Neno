import React, {Component} from 'react';
import blueMark from '../../../content/day-tours/boat-tours/SafariBlue.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class SafariBlue extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Safari Blue'
          page='day-tours/boat-tours'
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
