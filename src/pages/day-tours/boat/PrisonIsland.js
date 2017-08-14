import React, {Component} from 'react';
import prisonMark from '../../../content/day-tours/boat/PrisonIsland.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class PrisonIsland extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Prison Island'
          page='day-tours/boat'
          i='4'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: prisonMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default PrisonIsland;
