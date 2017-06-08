import React, { Component } from 'react';
import Stack from '../layout/Stack';
import DayToursData from '../data/DayTours.json';

class DayTours extends Component {
  render() {
    return (
      <div>
        <Stack
          className='tours'
          page="day-tours"
          data={DayToursData}/>
      </div>
    );
  }
}

export default DayTours;
