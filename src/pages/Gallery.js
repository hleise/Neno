import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <page>
      <div className='image-row'>
        <div className='image'>
          <h1>Featured</h1>
          <img className='gallery-image' src={require('../img/5.jpg')} alt='left'/>
        </div>
        <div className='image'>
          <h1>Adventure</h1>
          <img className='gallery-image' src={require('../img/4.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='image'>
          <h1>Featured</h1>
          <img className='gallery-image' src={require('../img/5.jpg')} alt='left'/>
        </div>
        <div className='image'>
          <h1>Adventure</h1>
          <img className='gallery-image' src={require('../img/4.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='image'>
          <h1>Featured</h1>
          <img className='gallery-image' src={require('../img/5.jpg')} alt='left'/>
        </div>
        <div className='image'>
          <h1>Adventure</h1>
          <img className='gallery-image' src={require('../img/4.jpg')} alt='right'/>
        </div>
      </div>
    </page>
    );
  }
}

export default Gallery;
