import React, { Component } from 'react';
import DayToursData from '../data/DayTours.json';
import ToursLayout from '../layout/Tours';

class DayTours extends Component {
  render() {
    return (
      <div className="day-tours">
<<<<<<< HEAD
        {sections.map((title, i) =>
          <div className="tours-section">
            <h1 className="section-title">
              {title + " Tours"}
            </h1>
           <img className='section-image' src={require('../img/' + i + '.jpg')} />
          </div>
        )}
=======
        <ToursLayout page="day-tours"/>
>>>>>>> 633553bfe0283156e117ce078d051d22c489aceb
      </div>
    );
  }
}

export default DayTours;
