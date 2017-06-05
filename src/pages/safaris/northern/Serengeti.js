import React, { Component } from 'react';
import serengetiMD from '../../../content/Safaris/NorthernCircuit/SerengetiNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Serengeti extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Serengeti National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/2.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: serengetiMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Serengeti;
