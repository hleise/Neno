import React, { Component } from 'react';
import spiceMark from '../../../content/SpiceTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SpiceTour extends Component {
  render() {
    return (
      <div className="spice-page">
          <div className="spice-banner">
            <h1>Spice Tour</h1>
          </div>
          <div className="spice-info">
           <HorizontalTextSection>
                <div className='chumbe-markdown' dangerouslySetInnerHTML={{__html: spiceMark}}>
                </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SpiceTour;
