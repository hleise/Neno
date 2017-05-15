import React, { Component } from 'react';
import Section from './components/Section.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
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
        <Section name='home' description='about us'/>
      </div>
    );
  }
}

export default Home;
