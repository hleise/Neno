import React, { Component } from 'react';
import Banner from '../layout/Banner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class Transportation extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='car-rental'>
        <Banner
          title='Car Rental'
          page='car-rental'
          i='0'
        />
        </Link>
        <Link to='flight-info'>
          <Banner
            title='Flight Info'
            page='flight-info'
            i='0'
          />
        </Link>
      </PageLayout>
    );
  }
}

export default Transportation;
