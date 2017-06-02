import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Manyara extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Lake Manyara National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/3.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Manyara;
