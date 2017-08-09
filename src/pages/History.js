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
          <StaticBanner
            bannerTitle='History of Zanzibar'
            page='history'
            i='0'
          />
          <div className="info" id="info">
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
