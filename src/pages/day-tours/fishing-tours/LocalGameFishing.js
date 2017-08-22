import React, {Component} from 'react';
import localMark from '../../../content/day-tours/fishing-tours/LocalGameFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class LocalGameFishing extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Local Game Fishing'
          page='day-tours/fishing-tours'
          i='1'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: localMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default LocalGameFishing;
