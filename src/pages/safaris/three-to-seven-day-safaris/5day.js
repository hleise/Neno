import React, {Component} from 'react';
import fiveMD from '../../../content/safaris/three-to-seven-day-safaris/5DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Fiveday extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>5 Days</h1>
          <img className='banner-image' src={require('../../../img/safaris/long/2.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: fiveMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Fiveday;
