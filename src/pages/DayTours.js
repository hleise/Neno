import React, { Component } from 'react';
import Section from '../components/Section.js';
import NavBar from '../components/NavBar.js';

class DayTours extends Component {
  render() {
    const sections = ["Cultural Day","Boat","Fishing","Other"];
    return (
      <div className="day-tours">
        {sections.map((title, i) =>
          <div className="tours-section">
            <h1 className="section-title">
              {title + " Tours"}
            </h1>
           <img className='section-image' src={require('../img/' + i + '.jpg')} />
          </div>
        )}

      </div>
    );
  }
}

export default DayTours;
