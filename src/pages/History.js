import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import historyMark from '../content/HistoryOfZanzibar.md';
import PageLayout from '../layout/PageLayout';

class History extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
          <div className="banner">
            <h1>History Of Zanzibar</h1>
            <img className='banner-image' src={require('../img/history/0.jpg')} />
          </div>
          <div className="info">
           <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: historyMark}}>
            </div>
            </HorizontalTextSection>
          </div>
      </div>
      </PageLayout>
    );
  }
}

export default History;
