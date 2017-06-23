import React, { Component } from 'react';;
import kidMark from '../../../content/KidVillageTour.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class Kidichi extends Component {
  render() {
    return (
      <div className="page">
          <div className="static-banner">
            <div className="banner-title">
              <h1>Kidichi Village</h1>
            </div>
            <img className='banner-image' src={require('../../../img/day-tours/cultural-day/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: kidMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Kidichi;
