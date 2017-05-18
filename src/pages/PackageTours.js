import React, { Component } from 'react';
import ToursLayout from '../layout/Tours';
import PackageToursData from '../data/PackageTours.json';

class Section extends Component {
  render() {
    return (
      <div className='package-tours'>
        <ToursLayout page="day-tours" data={PackageToursData}/>
      </div>
    );
  }
}

export default Section;
