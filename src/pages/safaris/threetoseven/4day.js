import React, {Component} from 'react';
import fourMD from '../../../content/safaris/threetoseven/4DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Fourday extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>4 Days</h1>
          <img className='banner-image' src={require('../../../img/safaris/long/1.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: fourMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Fourday;
