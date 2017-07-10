import React, {Component} from 'react';
import deepMark from '../../../content/day-tours/fishing/DeepSeaFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";

class DeepSeaFishing extends Component {
  render() {
    return (
      <div className="page">
        <div className="static-banner">
          <div className="banner-title">
            <h1>Deep Sea Fishing</h1>
          </div>
          <img className='banner-image' src={require('../../../img/day-tours/fishing/0.jpg')}/>
        </div>
        <div className="info">
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
