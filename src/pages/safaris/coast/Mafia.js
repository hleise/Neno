import React, { Component } from 'react';

import HorizontalTextSection from '../../../components/HorizontalTextSection.js';


class Mafia extends Component {
  render() {
    return (
      <div className="page">
          <div className="banner">
            <h1>Mafia Archipelago</h1>
            <img className='banner-image' src={require('../../../img/safaris/coast/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default Mafia;
