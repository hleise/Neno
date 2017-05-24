import React, { Component } from 'react';
import dolphinMark from '../../../content/DolphinTours.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class DolpinTour extends Component {
  render() {
    return (
      <div className="dolphin-page">
          <div className="dolphin-banner">
            <h1>Dolphin Tour</h1>
          </div>
          <div className="dolphin-info">
           <HorizontalTextSection>
            <div className='dolphin-markdown' dangerouslySetInnerHTML={{__html: dolphinMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default DolpinTour;
