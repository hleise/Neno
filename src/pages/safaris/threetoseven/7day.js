import React, {Component} from 'react';
import sevenMD from '../../../content/safaris/threetoseven/7DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Sevenday extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>7 Days</h1>
          <img className='banner-image' src={require('../../../img/safaris/long/3.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: sevenMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Sevenday;
