import React, {Component} from 'react';
import forestMark from '../../../content/day-tours/other/JozaniForest.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class JozaniForestTour extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Jozani Forest</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/other/1.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: forestMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default JozaniForestTour;
