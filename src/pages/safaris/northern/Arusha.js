import React, { Component } from 'react';
import arushaMD from '../../../content/Safaris/NorthernCircuit/ArushaNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Arusha extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Arusha National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: arushaMD}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Arusha;
