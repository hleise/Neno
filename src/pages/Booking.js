import React, { Component } from 'react';
import Banner from '../layout/Banner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class Booking extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='day-tours'>
        <Banner
          sectionTitle='Day Tours'
          page='day-tours'
          i='0'
        />
        </Link>
        <Link to='package-tours'>
          <Banner
            sectionTitle='Package Tours'
            page='package-tours'
            i='0'
          />
        </Link>
        <Link to='safaris'>
          <Banner
            sectionTitle='Safaris'
            page='safaris'
            i='0'
          />
        </Link>
        <Link to='hotels'>
          <Banner
            sectionTitle='Hotels'
            page='hotels'
            i='0'
          />
        </Link>
      </PageLayout>
    );
  }
}

export default Booking;
