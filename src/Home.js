import React, { Component } from 'react';
import Section from './components/Section.js';
import HomeDescription from './content/home.md';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className='nav-bar'>
          <div className='nav-bar-button'>
            Booking
          </div>
          <div className='nav-bar-button'>
            Transportation
          </div>
          <div className='nav-bar-button'>
            Hotels
          </div>
          <div className='nav-bar-button'>
            History of Zanzibar
          </div>
        </div>
        <div className='image-wrapper'>
          <div className='image'>
            <img className='left-image' src={require('./img/5.jpg')}/>
          </div>
          <div className='image'>
            <img className='right-image' src={require('./img/4.jpg')}/>
          </div>
        </div>
        <Section title='Neno Tours & Travel Agency' description='Neno Tours & Travel Agency offers you, the discerning traveler...'/>
      </div>
    );
  }
}

export default Home;
