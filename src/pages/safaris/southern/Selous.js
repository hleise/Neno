import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Selous extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Selous Game Refuge</h1>
            <img className='banner-image' src={require('../../../img/safaris/southern/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Selous;
