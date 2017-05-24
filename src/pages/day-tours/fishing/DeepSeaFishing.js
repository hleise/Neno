import React, { Component } from 'react';
import deepMark from '../../../content/DeepSeaFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class DeepSeaFishing extends Component {
  render() {
    return (
      <div className="deep-page">
          <div className="deep-banner">
            <h1>Deep Sea Fishing</h1>
          </div>
          <div className="deep-info">
           <HorizontalTextSection>
            <div className='deep-markdown' dangerouslySetInnerHTML={{__html: deepMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default DeepSeaFishing;
