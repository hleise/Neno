import React, { Component } from 'react';
import sunsetMark from '../../../content/SunsetCruise.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SunsetDhowCruise extends Component {
  render() {
    return (
      <div className="sunset-page">
          <div className="sunset-banner">
            <h1>Sunset Dhow Cruise</h1>
          </div>
          <div className="sunset-info">
           <HorizontalTextSection>
            <div className='sunset-markdown' dangerouslySetInnerHTML={{__html: sunsetMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SunsetDhowCruise;
