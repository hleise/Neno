import React, { Component } from 'react';
import ToursLayout from '../layout/ToursLayout';
import DayToursData from '../data/DayTours.json';

class DayToursHome extends Component {
  render() {
    return (
      <div>
        <ToursLayout page="day-tours" data={DayToursData}/>
      </div>
    );
  }
}

export default DayToursHome;
