import React, { Component } from 'react';
import HorizontalTextSection from './components/HorizontalTextSection.js';
import HomeContent from './content/home.md';
import PageLayout from './layout/PageLayout';
import Slider from './components/Slider';

class Home extends Component {
  rawMarkup(){
           return{ __html: HomeContent};
  }
  render() {
    return (
      <div>
        <Slider/>
        <PageLayout>
          <div className="page">
              <div className="info">
                <HorizontalTextSection>
                  <div className='markdown' dangerouslySetInnerHTML={this.rawMarkup()} />
                </HorizontalTextSection>
              </div>
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default Home;
