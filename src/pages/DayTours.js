import React, { Component } from 'react';
import ToursLayout from '../layout/Tours';
import DayToursData from '../data/DayTours.json';


class DayTours extends Component {
  render() {
    return (
      <div className="day-tours">
        <ToursLayout page="day-tours" data={DayToursData}/>
      </div>
    );
  }
}

export default DayTours;
