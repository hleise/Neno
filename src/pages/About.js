import React, { Component } from 'react';
import TextSection from '../components/TextSection';
import PageLayout from '../layout/PageLayout';
class About extends Component {
  render() {
    return (
      <PageLayout>
        <div className='page'>
          <div className="about">
            <div className="banner">
              <h1>General Info</h1>
              <img className='banner-image' src={require('../img/history/0.jpg')} />
            </div>
            <div className="banner">
              <h1>History Of Zanzibar</h1>
              <img className='banner-image' src={require('../img/history/0.jpg')} />
            </div>
            <div className="banner">
              <h1>Volunteers</h1>
              <img className='banner-image' src={require('../img/history/0.jpg')} />
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default About;
