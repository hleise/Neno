import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className="home">
        <div className='image-wrapper'>
          <div className='image'>
            <img className='left-image' src={require('../img/5.jpg')} alt='left'/>
          </div>
          <div className='image'>
            <img className='right-image' src={require('../img/4.jpg')} alt='right'/>
          </div>
        </div>

      </div>
    );
  }
}

export default Gallery;
