import React, { Component } from 'react';
import kataviMD from '../../../content/Safaris/WesternCircuit/KataviNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Katavi extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Katavi National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/western/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: kataviMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Katavi;
