import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class Transportation extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='car-rental'>
        <StaticBanner
          bannerTitle='Car Rental'
          page='car-rental'
          i='0'
        />
        </Link>
        <Link to='flight-info'>
          <StaticBanner
            bannerTitle='Flight Info'
            page='flight-info'
            i='0'
          />
        </Link>
      </PageLayout>
    );
  }
}

export default Transportation;
