import React, {Component} from 'react';
import forestMark from '../../../content/day-tours/other-tours/JozaniForest.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class JozaniForestTour extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Jozani Forest'
          page='day-tours/other-tours'
          i='1'
        />
        <div className="info" id="info">
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
