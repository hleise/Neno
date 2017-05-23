import React, { Component } from 'react';
import TextSection from '../components/TextSection.js';
/* import flight info md here */

class Section extends Component {
  render() {
    return (
      <div className='flight-info'>
        <TextSection>
          <div className='flight-banner'>
            <h1>Flight Info</h1>
          </div>
          <div className='flight-info-info'>
          </div>
        </TextSection>
      </div>
    );
  }
}

export default Section;
