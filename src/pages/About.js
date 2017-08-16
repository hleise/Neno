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
            title='General Info'
            page='geninfo'
            i='0'
            rollOver='true'
          />
        </Link>
        <Link to='history-of-zanzibar'>
        <Banner
          title='History of Zanzibar'
          page='history'
          i='0'
          rollOver='true'
        />
        </Link>
        <Link to='volunteers'>
        <Banner
          title='Volunteers'
          page='volunteer'
          i='0'
          rollOver='true'
        />
        </Link>
      </PageLayout>
    );
  }
}

export default About;
