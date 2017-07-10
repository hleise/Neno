import React, {Component} from 'react';
import chumbeMark from '../../../content/day-tours/boat/ChumbeIslandTrip.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class ChumbeIsland extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Chumbe Island</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/boat/2.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: chumbeMark}}/>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default ChumbeIsland;
