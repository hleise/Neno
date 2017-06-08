import React, { Component } from 'react';
import jamMark from '../../../content/JamVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Jambiani extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Jambiani Village</h1>
            <img className='banner-image' src={require('../../../img/day-tours/cultural-day/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: jamMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Jambiani;
