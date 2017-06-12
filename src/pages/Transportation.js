import React, { Component } from 'react';
import Stack from '../layout/Stack';
import SafarisData from '../data/Safaris.json';
import PageLayout from '../layout/PageLayout';

class Transportation extends Component {
  render() {
    return (
        <PageLayout>
          <div className='page'>
            <div className="banner">
              <h1>Car Rental</h1>
              <img className='banner-image' src={require('../img/history/0.jpg')} />
            </div>
            <div className="banner">
              <h1>Flight Info</h1>
              <img className='banner-image' src={require('../img/history/0.jpg')} />
            </div>
         </div>
       </PageLayout>
    );
  }
}

export default Transportation;
