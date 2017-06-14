import React, { Component } from 'react';
import Banner from '../layout/Banner';
import PageLayout from '../layout/PageLayout';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <PageLayout>
        <Link to='general-information'>
          <Banner
            sectionTitle='General Info'
            page='geninfo'
            i='0'
          />
        </Link>
        <Link to='history-of-zanzibar'>
        <Banner
          sectionTitle='History of Zanzibar'
          page='history'
          i='0'
        />
        </Link>
        <Link to='volunteers'>
        <Banner
          sectionTitle='Volunteers'
          page='volunteer'
          i='0'
        />
        </Link>
      </PageLayout>
    );
  }
}

export default About;
