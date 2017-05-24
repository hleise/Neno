import React, { Component } from 'react';
import jamMark from '../../../content/JamVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class Jambiani extends Component {
  render() {
    return (
      <div className="j-page">
          <div className="j-banner">
            <h1>Jambiani Village</h1>
          </div>
          <div className="j-info">
           <HorizontalTextSection>
            <div className='j-markdown' dangerouslySetInnerHTML={{__html: jamMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Jambiani;
