import React, { Component } from 'react';
import prisonMark from '../../../content/PrisonIsland.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class PrisonIsland extends Component {
  render() {
    return (
      <div className="page">
          <div className="static-banner">
            <div className="banner-title">
              <h1>Prison Island</h1>
            </div>
            <img className='banner-image' src={require('../../../img/day-tours/boat/4.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: prisonMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default PrisonIsland;
