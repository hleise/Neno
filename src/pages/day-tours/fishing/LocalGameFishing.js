import React, {Component} from 'react';
import localMark from '../../../content/day-tours/fishing/LocalGameFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class LocalGameFishing extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Local Game Fishing'
          page='day-tours/fishing'
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
