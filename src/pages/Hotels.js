import React, { Component } from 'react';
import HotelsData from '../data/Hotels.json';
import Stack from '../layout/Stack';

class Hotels extends Component {
  render() {
    return (
      <div>
        <Stack
          className='hotels'
          page='hotels'
          data={HotelsData}/>
      </div>
    );
  }
}

export default Hotels;
