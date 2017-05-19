import React, { Component } from 'react';
import TextSection from './components/TextSection.js';

import markdownFile  from './content/home.md';

class Home extends Component {
  rawMarkup(){
           return{ __html: markdownFile};
  }
  render() {
    return (
      <div className="home">
        <div className='image-wrapper'>
          <div className='image'>
            <img className='left-image' src={require('./img/5.jpg')} alt='left'/>
          </div>
          <div className='image'>
            <img className='right-image' src={require('./img/4.jpg')} alt='right'/>
          </div>
        </div>
        <TextSection>
          <h1>Neno</h1>
            <div className='home-markdown' dangerouslySetInnerHTML={this.rawMarkup()}>
            </div>
        </TextSection>
      </div>
    );
  }
}

export default Home;
