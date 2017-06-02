import React, { Component } from 'react';
import sandMark from '../../../content/SandbankPicnic.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class SandbankPicnic extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Sandbank Picnic</h1>
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: sandMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default SandbankPicnic;
