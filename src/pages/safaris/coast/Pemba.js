import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Pemba extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Pemba Island</h1>
            <img className='banner-image' src={require('../../../img/safaris/coast/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Pemba;
