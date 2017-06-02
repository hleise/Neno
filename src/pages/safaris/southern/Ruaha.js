import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Ruaha extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Ruaha National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/southern/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Ruaha;
