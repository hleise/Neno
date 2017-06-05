import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className='image-wrapper'>
        <div className='image'>
          <img className='left-image' src={require('../img/5.jpg')} alt='left'/>
          <h1>Featured</h1>
        </div>
        <div className='image'>
          <img className='right-image' src={require('../img/4.jpg')} alt='right'/>
          <h1>Adventure</h1>
        </div>
      </div>
    );
  }
}

export default Gallery;
