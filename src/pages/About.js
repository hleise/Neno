import React, { Component } from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection';
import PageLayout from '../layout/PageLayout';

class About extends Component {
  render() {
    return (
      <PageLayout>
        <div className="page">
            <div className="banner">
              <h1>About</h1>
            </div>
        </div>
      </PageLayout>
    );
  }
}

export default About;
