import React, { Component } from 'react';
import Section from '../components/Section.js';
import NavBar from '../components/NavBar.js';

class DayTours extends Component {
  render() {
    return (
      <div className="day-tour-page">
      <NavBar/>
      <div className="culture-day-tours">
            <p id="culture-text">
              Cultural Day Tours
            </p>
            <img className='culture-image' src={require('../img/0.jpg')} />
            <div className="culture-horizontal">
                
            </div>
        </div>
        <div className="boat-tours">
          <p id="boat-text">
            Boat Tours
          </p>
          <img className='boat-image' src={require('../img/3.jpg')} />
        </div>
        <div className="fishing-tours">
          <p id="fish-text">
           Fishing Tours
          </p>
           <img className='boat-image' src={require('../img/deep_fishing.jpg')} />
        </div>
        <div className="other-tours">
        <p id="other-text">
         Other Tours
        </p>
         <img className='boat-image' src={require('../img/1.jpg')} />
        </div>
      </div>
    );
  }
}

export default DayTours;
