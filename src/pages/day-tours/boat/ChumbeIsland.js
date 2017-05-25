import React, { Component } from 'react';
import chumbeMark from '../../../content/ChumbeIslandTrip.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class ChumbeIsland extends Component {
  render() {
    return (
      <div className="chumbe-page">
          <div className="chumbe-banner">
            <h1>Chumbe Island</h1>
          </div>
          <div className="chumbe-info">
           <HorizontalTextSection>
            <div className='chumbe-markdown' dangerouslySetInnerHTML={{__html: chumbeMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default ChumbeIsland;
