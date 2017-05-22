import React, { Component } from 'react';
import Stack from '../layout/Stack';
import CarRentalData from '../data/DayTours.json';

class CarRental extends Component {
  render() {
    return (
      <div>
        <Stack
          className='tours'
          page="car-rental"
          data={CarRentalData}/>
      </div>
    );
  }
}

export default CarRental;
