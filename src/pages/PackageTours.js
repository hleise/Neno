import React, { Component } from 'react';
import Stack from '../layout/Stack';
import PackageToursData from '../data/PackageTours.json';

class PackageTours extends Component {
  render() {
    return (
        <div>
        <Stack
          className='tours'
          page="package-tours"
          data={PackageToursData}/>

        </div>
    );
  }
}

export default PackageTours;
