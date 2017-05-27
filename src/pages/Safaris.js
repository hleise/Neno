import React, { Component } from 'react';
import Stack from '../layout/Stack';
import SafarisData from '../data/Safaris.json';

class Section extends Component {
  render() {
    return (
        <div>
        <Stack
          className='tours'
          page="safaris"
          data={SafarisData}/>
       </div>
    );
  }
}

export default Section;
