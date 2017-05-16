import React, { Component } from 'react';
import Section from './components/Section.js';
import NavBar from './components/NavBar.js';
import markdownFile  from './content/home.md';

class Home extends Component {
  rawMarkup(){
           return{ __html: markdownFile};
  }
  render() {
    return (
      <div className="home">
        <NavBar/>
        <div className='image-wrapper'>
          <div className='image'>
            <img className='left-image' src={require('./img/5.jpg')} alt='left'/>
          </div>
          <div className='image'>
            <img className='right-image' src={require('./img/4.jpg')} alt='right'/>
          </div>
        </div>
        <Section>
          <h1>Neno</h1>
            <div className='home-markdown' dangerouslySetInnerHTML={this.rawMarkup()}>
            </div>
        </Section>
      </div>
    );
  }
}

export default Home;
