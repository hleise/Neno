import React, { Component } from 'react';;
import kidMark from '../../../content/KidVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class Kidichi extends Component {
  render() {
    return (
      <div className="k-page">
          <div className="k-banner">
            <h1>Kidichi Village</h1>
          </div>
          <div className="k-info">
           <HorizontalTextSection>
            <div className='k-markdown' dangerouslySetInnerHTML={{__html: kidMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Kidichi;
