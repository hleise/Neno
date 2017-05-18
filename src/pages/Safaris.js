import React, { Component } from 'react';
import ToursLayout from '../layout/Tours';
import SafarisData from '../data/Safaris.json';

class Section extends Component {
  render() {
    return (
      <div className='safaris'>
        <ToursLayout page="day-tours" data={SafarisData}/>
      </div>
    );
  }
}

export default Section;
