import React, { Component } from 'react';
import HorizontalTextSection from './components/HorizontalTextSection.js';
import HomeContent from './content/home.md';
import PageLayout from './layout/PageLayout';


class Home extends Component {
  rawMarkup(){
           return{ __html: HomeContent};
  }
  render() {
    return (
      <PageLayout>
        <div className="page">
            <div className="banner">
              <h1>Neno Tours & Travels</h1>
              <img className='home-image' src={require('./img/5.jpg')} />
            </div>
            <div className="info">
              <HorizontalTextSection>
                <div className='markdown' dangerouslySetInnerHTML={this.rawMarkup()} />
              </HorizontalTextSection>
            </div>
        </div>
      </PageLayout>
    );
  }
}

export default Home;
