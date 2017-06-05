import React, { Component } from 'react';
import sevenMD from '../../../content/Safaris/3to7DaySafaris/7DaySafari.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Sevenday extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>7 Days</h1>
            <img className='banner-image' src={require('../../../img/safaris/long/3.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: sevenMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Sevenday;
