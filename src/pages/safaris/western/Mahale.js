import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Mahale extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Mahale Mountains National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/western/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Mahale;
