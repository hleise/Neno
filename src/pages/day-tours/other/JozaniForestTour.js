import React, { Component } from 'react';
import forestMark from '../../../content/JozaniForest.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class JozaniForestTour extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Jozani Forest</h1>
            <img className='banner-image' src={require('../../../img/day-tours/other/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: forestMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default JozaniForestTour;
