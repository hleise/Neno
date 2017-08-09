import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import generalMark from '../content/GeneralInfo.md';
import PageLayout from '../layout/PageLayout';

class General extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
          <StaticBanner
            bannerTitle='General Info'
            page='geninfo'
            i='0'
          />
          <div className="info" id="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: generalMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
      </PageLayout>
    );
  }
}

export default General;
