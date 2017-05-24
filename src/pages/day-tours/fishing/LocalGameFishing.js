import React, { Component } from 'react';
import localMark from '../../../content/LocalGameFishing.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';

class LocalGameFishing extends Component {
  render() {
    return (
      <div className="local-page">
          <div className="local-banner">
            <h1>Local Game Fishing</h1>
          </div>
          <div className="local-info">
           <HorizontalTextSection>
            <div className='local-markdown' dangerouslySetInnerHTML={{__html: localMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
    );
  }
}

export default LocalGameFishing;
