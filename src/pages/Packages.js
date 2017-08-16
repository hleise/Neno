import React, { Component } from 'react';
import Stack from '../layout/Stack';
import PackageData from '../data/Packages.json';

class Packages extends Component {
  render() {
    return (
        <div>
        <Stack
          className='tours'
          page="packages"
          data={PackageData}/>
        </div>
    );
  }
}

export default Packages;
