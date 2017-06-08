import React, { Component } from 'react';
import nunMark from '../../../content/NunVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class Nungwi extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Nungwi Village</h1>
            <img className='banner-image' src={require('../../../img/day-tours/cultural-day/2.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: nunMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Nungwi;
