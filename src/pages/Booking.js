import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class Booking extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='day-tours'>
        <StaticBanner
          bannerTitle='Day Tours'
          page='day-tours'
          i='0'
        />
        </Link>
        <Link to='package-tours'>
          <StaticBanner
            bannerTitle='Package Tours'
            page='package-tours'
            i='0'
          />
        </Link>
        <Link to='safaris'>
          <StaticBanner
            bannerTitle='Safaris'
            page='safaris'
            i='0'
          />
        </Link>
        <Link to='hotels'>
          <StaticBanner
            bannerTitle='Hotels'
            page='hotels'
            i='0'
          />
        </Link>
      </PageLayout>
    );
  }
}

export default Booking;
