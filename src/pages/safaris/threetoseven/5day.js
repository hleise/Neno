import React, { Component } from 'react';
import fiveMD from '../../../content/Safaris/3to7DaySafaris/5DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Fiveday extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>5 Days</h1>
            <img className='banner-image' src={require('../../../img/safaris/long/2.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: fiveMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Fiveday;
