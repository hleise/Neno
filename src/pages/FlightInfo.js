import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import PageLayout from '../layout/PageLayout';
import HorizontalTextSection from '../components/HorizontalTextSection.js';

class FlightInfo extends Component {
  render() {
    return (
      <PageLayout>
        <StaticBanner
          bannerTitle='Flight Info'
          page='flight-info'
          i='0'
          />
        <div className="info">
         <HorizontalTextSection>

          </HorizontalTextSection>
        </div>
      </PageLayout>
    );
  }
}

export default FlightInfo;
