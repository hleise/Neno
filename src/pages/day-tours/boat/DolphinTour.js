import React, { Component } from 'react';
import dolphinMark from '../../../content/DolphinTours.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class DolpinTour extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Dolphin Tour</h1>
            <img className='banner-image' src={require('../../../img/day-tours/boat/3.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: dolphinMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default DolpinTour;
