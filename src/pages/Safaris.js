import React, { Component } from 'react';
import ToursLayout from '../layout/Tours';

class Section extends Component {
  render() {
    return (
      <div className='safaris'>
        <ToursLayout page="day-tours"/>
      </div>
    );
  }
}

export default Section;
