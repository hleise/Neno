import React, { Component } from 'react';
import pembaMD from '../../../content/Safaris/TheCoastAndIslands/PembaIsland.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Pemba extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Pemba Island</h1>
            <img className='banner-image' src={require('../../../img/safaris/coast/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: pembaMD}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Pemba;
