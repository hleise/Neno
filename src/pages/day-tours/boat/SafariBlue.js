import React, { Component } from 'react';
import blueMark from '../../../content/SafariBlue.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SafariBlue extends Component {
  render() {
    return (
      <div className="page">
          <div className="static-banner">
            <div className="banner-title">
              <h1>Safari Blue</h1>
            </div>
            <img className='banner-image' src={require('../../../img/day-tours/boat/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: blueMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SafariBlue;
