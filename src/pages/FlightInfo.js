import React, { Component } from 'react';
import Banner from '../layout/Banner';
import PageLayout from '../layout/PageLayout';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import flightMark from '../content/FlightInfo.md';

class FlightInfo extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
        <Banner
          title='Flight Info'
          page='flight-info'
          i='0'
          />
        <div className="info" id="info">
         <HorizontalTextSection>
          <div className='markdown' dangerouslySetInnerHTML={{__html: flightMark}}>
          </div>
          </HorizontalTextSection>
        </div>
      </div>
      </PageLayout>
    );
  }
}

export default FlightInfo;
