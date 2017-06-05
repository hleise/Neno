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
          <div className="banner">
            <h1>General Information</h1>
            <img className='banner-image' src={require('../img/geninfo/0.jpg')} />
          </div>
          <div className="info">
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
