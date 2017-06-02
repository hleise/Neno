import React, { Component } from 'react';
import chumbeMark from '../../../content/ChumbeIslandTrip.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class ChumbeIsland extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Chumbe Island</h1>
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: chumbeMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default ChumbeIsland;
