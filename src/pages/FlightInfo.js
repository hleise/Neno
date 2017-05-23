import React, { Component } from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
/* import flight info md here */

class Section extends Component {
  render() {
    return (
      <div className='flight-info'>
        <HorizontalTextSection>
          <div className='flight-banner'>
            <h1>Flight Info</h1>
          </div>
          <div className='flight-info-info'>

          </div>
        </HorizontalTextSection>
      </div>
    );
  }
}

export default Section;
