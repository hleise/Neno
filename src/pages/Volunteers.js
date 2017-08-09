import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';

import PageLayout from '../layout/PageLayout';

class Volunteers extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
        <StaticBanner
          bannerTitle='Volunteers'
          page='volunteer'
          i='0'
        />
        <div className="info" id="info">
         <HorizontalTextSection>

          </HorizontalTextSection>
        </div>
      </div>
      </PageLayout>
    );
  }
}

export default Volunteers;
