import React, { Component } from 'react';
import DayToursData from '../data/DayTours.json';
import ToursLayout from '../layout/Tours';

class DayTours extends Component {
  render() {
    return (
      <div className="day-tours">
        <ToursLayout page="day-tours"/>
      </div>
    );
  }
}

export default DayTours;
