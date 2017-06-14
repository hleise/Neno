import React, { Component } from 'react';
import StaticBanner from '../layout/StaticBanner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='general-information'>
          <StaticBanner
            bannerTitle='General Info'
            page='geninfo'
            i='0'
          />
        </Link>
        <Link to='history-of-zanzibar'>
        <StaticBanner
          bannerTitle='History of Zanzibar'
          page='history'
          i='0'
        />
        </Link>
        <Link to='volunteers'>
        <StaticBanner
          bannerTitle='Volunteers'
          page='volunteer'
          i='0'
        />
        </Link>
      </PageLayout>
    );
  }
}

export default About;
