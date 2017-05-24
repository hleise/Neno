import React, { Component } from 'react';
import prisonMark from '../../../content/PrisonIsland.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class PrisonIsland extends Component {
  render() {
    return (
      <div className="prison-page">
          <div className="prison-banner">
            <h1>Prison Island</h1>
          </div>
          <div className="prison-info">
           <HorizontalTextSection>
            <div className='prison-markdown' dangerouslySetInnerHTML={{__html: prisonMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default PrisonIsland;
