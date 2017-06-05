import React, { Component } from 'react';
import daysMD from '../../../content/Safaris/3to7DaySafaris/3to7GeneralInfo.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Daysinfo extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>General Information</h1>
            <img className='banner-image' src={require('../../../img/safaris/long/4.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: daysMD}}>
           </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Daysinfo;
