import React, { Component } from 'react';
import tarangireMD from '../../../content/Safaris/NorthernCircuit/TarangireNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Tarangire extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Tarangire National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/4.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: tarangireMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Tarangire;
