import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Tarangire extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Tarangire National Park</h1>
            <img className='banner-image' src={require('../../../img/safaris/northern/4.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Tarangire;
