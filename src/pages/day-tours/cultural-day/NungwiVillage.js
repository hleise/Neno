import React, {Component} from 'react';
import nunMark from '../../../content/day-tours/cultural-day/NunVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class Nungwi extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Nungwi Village</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/cultural-day/2.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: nunMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Nungwi;
