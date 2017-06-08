import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';

class FlightInfo extends Component {
  render() {
    return (
      <StaticBanner
        bannerTitle='Flight Info'
        page='flight-info'
        i='0'
        />
    );
  }
}

export default FlightInfo;
