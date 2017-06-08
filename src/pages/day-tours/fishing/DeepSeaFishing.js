import React, { Component } from 'react';
import deepMark from '../../../content/DeepSeaFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class DeepSeaFishing extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Deep Sea Fishing</h1>
            <img className='banner-image' src={require('../../../img/day-tours/fishing/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: deepMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default DeepSeaFishing;
