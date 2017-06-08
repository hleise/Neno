import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';

import PageLayout from '../layout/PageLayout';

class Volunteers extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
          <div className="banner">
            <h1>Volunteers</h1>
            <img className='banner-image' src={require('../img/volunteer/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>

            </HorizontalTextSection>
          </div>
      </div>
      </PageLayout>
    );
  }
}

export default Volunteers;
