import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';

class History extends Component {
  render() {
    return (
      <StaticBanner
        bannerTitle='History of Zanzibar'
        page='history'
        i='0'
        />
    );
  }
}

export default History;
