import React, { Component } from 'react';
import PageLayout from '../layout/PageLayout';
import {Link} from 'react-router-dom';


class Gallery extends Component {
  render() {
    return (

      <page>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/featured">
                Featured
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/0.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/adventure">
              Adventure
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/1.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/mainland-tanzania">
              Mainland Tanzania
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/2.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/zanzibar-island">
              Zanzibar Island
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/3.jpg')} alt='right'/>
        </div>
      </div>
      <div className='image-row'>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/culture">
              Culture
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/4.jpg')} alt='left'/>
        </div>
        <div className='gallery-image-container'>
          <h1>
            <Link to="/gallery-category/volunteer-opportunities">
              Volunteer Opportunities
            </Link>
          </h1>
          <img className='gallery-image' src={require('../img/gallery/5.jpg')} alt='right'/>
        </div>
      </div>
    </page>

    );
  }
}

export default Gallery;
