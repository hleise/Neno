import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Ngorongo extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Ngorongo Conservation Area</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/1.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Ngorongo;
