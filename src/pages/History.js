import React, { Component } from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
/* import history md here */

class Section extends Component {
  render() {
    return (
      <div className='history-of-zanzibar'>
        <HorizontalTextSection>
          <div className='history-banner'>
            <h1>History of Zanzibar</h1>
          </div>
          <div className='history-info'>

          </div>
        </HorizontalTextSection>
      </div>
    );
  }
}

export default Section;
