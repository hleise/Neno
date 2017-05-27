import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import historyMark from '../content/HistoryOfZanzibar.md';

class History extends Component {
  render() {
    return (
      <div className='history'>
      <StaticBanner
        bannerTitle='History of Zanzibar'
        page='history'
        i='0'
        />
        <HorizontalTextSection>
         <div className='history-markdown' dangerouslySetInnerHTML={{__html: historyMark}}>
         </div>
         </HorizontalTextSection>
         </div>
    );
  }
}

export default History;
