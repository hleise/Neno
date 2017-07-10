import React, {Component} from 'react';
import ruahaMD from '../../../content/safaris/southern/RuahaNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Ruaha extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Ruaha National Park</h1>
          <img className='banner-image' src={require('../../../img/safaris/southern/1.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: ruahaMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Ruaha;
