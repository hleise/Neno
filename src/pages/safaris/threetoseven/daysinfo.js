import React, {Component} from 'react';
import daysMD from '../../../content/safaris/threetoseven/3to7GeneralInfo.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Daysinfo extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>General Information</h1>
          <img className='banner-image' src={require('../../../img/safaris/long/4.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: daysMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Daysinfo;
