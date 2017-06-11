import React, { Component } from 'react';
import HorizontalTextSection from './components/HorizontalTextSection.js';
import HomeContent from './content/home.md';
import PageLayout from './layout/PageLayout';
import Slider from './components/Slider';
var Carousel = require('nuka-carousel');


class Home extends Component {
  rawMarkup(){
           return{ __html: HomeContent};
  }
  render() {
    return (
      <div>
        <PageLayout>
          <Carousel>
            <img src={require('./img/home/0.jpg')}/>
            <img src={require('./img/home/1.jpg')}/>
            <img src={require('./img/home/2.jpg')}/>
            <img src={require('./img/home/3.jpg')}/>
            <img src={require('./img/home/4.jpg')}/>
            <img src={require('./img/home/5.jpg')}/>
            <img src={require('./img/home/6.jpg')}/>
            <img src={require('./img/home/7.jpg')}/>
          </Carousel>
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
