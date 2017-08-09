import React, {Component} from 'react';
import deepMark from '../../../content/day-tours/fishing/DeepSeaFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import StaticBanner from '../../../layout/StaticBanner'

class DeepSeaFishing extends Component {
  render() {
    return (
      <div className="page">
        <StaticBanner
          bannerTitle='Deep Sea Fishing'
          page='day-tours/fishing'
          i='0'
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: deepMark}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default DeepSeaFishing;
