import React, { Component } from 'react';
import nunMark from '../../../content/NunVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class Nungwi extends Component {
  render() {
    return (
      <div className="n-page">
          <div className="n-banner">
            <h1>Nungwi Village</h1>
          </div>
          <div className="n-info">
           <HorizontalTextSection>
            <div className='n-markdown' dangerouslySetInnerHTML={{__html: nunMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Nungwi;
