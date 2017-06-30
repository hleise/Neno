import React, { Component } from 'react';
import PageLayout from '../layout/PageLayout';
import {Link} from 'react-router-dom';


class Gallery extends Component {
  render() {
    return (
      <page>
      <div className='image-row'>
        <Link to="/gallery-category/featured" className='gallery-image-container'>
          <h1>Featured</h1>
          <img className='gallery-image' src={require('../img/gallery/0.jpg')} alt='left'/>
        </Link>
        <Link to="/gallery-category/adventure" className='gallery-image-container'>
            <h1>Adventure</h1>
            <img className='gallery-image' src={require('../img/gallery/1.jpg')} alt='right'/>
        </Link>
      </div>
      <div className='image-row'>
        <Link to="/gallery-category/mainland-tanzania" className='gallery-image-container'>
          <h1>
            Mainland Tanzania |
            Tanzania Bara
          </h1>
          <img className='gallery-image' src={require('../img/gallery/2.jpg')} alt='left'/>
        </Link>
        <Link to="/gallery-category/zanzibar-island" className='gallery-image-container'>
          <h1>
            Zanzibar Island |
            Kisiwa Cha Zanzibar
          </h1>
          <img className='gallery-image' src={require('../img/gallery/3.jpg')} alt='right'/>
        </Link>
      </div>
      <div className='image-row'>
        <Link to="/gallery-category/culture" className='gallery-image-container'>
          <h1>
            Culture |
            Utamaduni
          </h1>
          <img className='gallery-image' src={require('../img/gallery/4.jpg')} alt='left'/>
        </Link>
        <Link to="/gallery-category/volunteer-opportunities" className='gallery-image-container'>
          <h1>
            Volunteer Opportunities |
            Fursa Za Kujitolea
          </h1>
          <img className='gallery-image' src={require('../img/gallery/5.jpg')} alt='right'/>
        </Link>
      </div>
    </page>

    );
  }
}

export default Gallery;
