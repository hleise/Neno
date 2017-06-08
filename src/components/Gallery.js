import React, { Component } from 'react';
import PageLayout from '../layout/PageLayout';

class Gallery extends Component {
  render() {
    return (

      <page>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>Featured</h1>
          <img className='gallery-image' src={require('../img/gallery/0.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>Adventure</h1>
          <img className='gallery-image' src={require('../img/gallery/1.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>Mainland Tanzania</h1>
          <img className='gallery-image' src={require('../img/gallery/2.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>Zanzibar Island</h1>
          <img className='gallery-image' src={require('../img/gallery/3.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>Culture</h1>
          <img className='gallery-image' src={require('../img/gallery/4.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>Volunteer Opportunities</h1>
          <img className='gallery-image' src={require('../img/gallery/5.jpg')} alt='right'/>
        </div>
      </div>
    </page>

    );
  }
}

export default Gallery;
