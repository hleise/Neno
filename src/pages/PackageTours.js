import React, { Component } from 'react';
import Stack from '../layout/Stack';
import PackageToursData from '../data/PackageTours.json';

class Section extends Component {
  render() {
    return (
      <div className='package-tours'>
        <Stack
          className='tours'
          page="day-tours"
          data={PackageToursData}/>
      </div>
    );
  }
}

export default Section;
