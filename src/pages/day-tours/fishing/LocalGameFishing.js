import React, { Component } from 'react';
import localMark from '../../../content/LocalGameFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class LocalGameFishing extends Component {
  render() {
    return (
      <div className="page">
          <div className="static-banner">
            <div className="banner-title">
            <h1>Local Game Fishing</h1>
            </div>
            <img className='banner-image' src={require('../../../img/day-tours/fishing/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: localMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default LocalGameFishing;
