import React, { Component } from 'react';
import forestMark from '../../../content/JozaniForest.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class JozaniForestTour extends Component {
  render() {
    return (
      <div className="forest-page">
          <div className="forest-banner">
            <h1>Jozani Forest</h1>
          </div>
          <div className="forest-info">
           <HorizontalTextSection>
            <div className='forest-markdown' dangerouslySetInnerHTML={{__html: forestMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default JozaniForestTour;
