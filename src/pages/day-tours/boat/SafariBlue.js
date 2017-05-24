import React, { Component } from 'react';
import blueMark from '../../../content/SafariBlue.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SafariBlue extends Component {
  render() {
    return (
      <div className="blue-page">
          <div className="blue-banner">
            <h1>Safari Blue</h1>
          </div>
          <div className="blue-info">
           <HorizontalTextSection>
            <div className='blue-markdown' dangerouslySetInnerHTML={{__html: blueMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SafariBlue;
