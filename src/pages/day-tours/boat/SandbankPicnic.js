import React, { Component } from 'react';
import sandMark from '../../../content/SandbankPicnic.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SandbankPicnic extends Component {
  render() {
    return (
      <div className="sand-page">
          <div className="sand-banner">
            <h1>Sandbank Picnic</h1>
          </div>
          <div className="sand-info">
           <HorizontalTextSection>
            <div className='sand-markdown' dangerouslySetInnerHTML={{__html: sandMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SandbankPicnic;
