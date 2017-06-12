import React, { Component } from 'react';
import PageLayout from '../layout/PageLayout';

class Section extends Component {
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

export default Section;
