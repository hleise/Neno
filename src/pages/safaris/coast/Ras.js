import React, { Component } from 'react';
import raskutaniMD from '../../../content/Safaris/TheCoastAndIslands/RasKutaniArea.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Ras extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Ras Kutani Area</h1>
            <img className='banner-image' src={require('../../../img/safaris/coast/2.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: raskutaniMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Ras;
