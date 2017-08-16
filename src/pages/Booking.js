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
          title='Day Tours'
          page='day-tours'
          i='0'
          rollOver='true'
        />
        </Link>
        <Link to='packages'>
          <Banner
            title='Package Tours'
            page='packages'
            i='0'
            rollOver='true'
          />
        </Link>
        <Link to='safaris'>
          <Banner
            title='Safaris'
            page='safaris'
            i='0'
            rollOver='true'
          />
        </Link>
        <Link to='hotels'>
          <Banner
            title='Hotels'
            page='hotels'
            i='0'
            rollOver='true'
          />
        </Link>
      </PageLayout>
    );
  }
}

export default Booking;
