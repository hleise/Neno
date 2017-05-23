import React, { Component } from 'react';
import TextSection from '../components/TextSection.js';
/* import history md here */

class Section extends Component {
  render() {
    return (
      <div className='history-of-zanzibar'>
        <TextSection>
          <div className='history-banner'>
            <h1>History of Zanzibar</h1>
          </div>
          <div className='history-info'>
          </div>
        </TextSection>
      </div>
    );
  }
}

export default Section;
