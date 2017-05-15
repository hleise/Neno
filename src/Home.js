import React, { Component } from 'react';
import Section from './components/Section.js';
import NavBar from './components/NavBar.js';
import HomeDescription from './content/home.md';

class Home extends Component {
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
          <h1>Neno Tours & Travel Agency</h1>
            {HomeDescription}
        </Section>
      </div>
    );
  }
}

export default Home;
