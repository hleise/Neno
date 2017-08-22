import React, {Component} from 'react';
import deepMark from '../../../content/day-tours/fishing-tours/DeepSeaFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";
import Banner from '../../../layout/Banner'

class DeepSeaFishing extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title='Deep Sea Fishing'
          page='day-tours/fishing-tours'
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
