import React, { Component } from 'react';
import HotelsDropdown from '../components/HotelsDropdown';
import HotelsData from '../data/Hotels.json';
import Stack from '../layout/Stack';

class Hotels extends Component {
  render() {
    return (
      <div>
        <HotelsDropdown/>
          <Stack
            className='hotels'
            page='hotels'
            data={HotelsData}/>
      </div>
    );
  }
}

export default Hotels;
