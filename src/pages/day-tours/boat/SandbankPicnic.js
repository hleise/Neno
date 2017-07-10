import React, {Component} from 'react';
import sandMark from '../../../content/day-tours/boat/SandbankPicnic.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class SandbankPicnic extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Sandbank Picnic</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/boat/5.jpg')}/>
        </div>
        <div className="info">
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
