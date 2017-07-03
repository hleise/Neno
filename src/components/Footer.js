import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Link to="">
          <img className='neno-logo' src={require('../logos/logo.png')} />
        </Link>
        <p>© 2017 Neno Tours & Travels</p>
        <a href="https://www.facebook.com/NenoToursNtravels" rel="external" target="_blank">
           <img className='logo-link' src={require('../logos/facebook.png')} />
        </a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g488129-d7391505-Reviews-Neno_Tours_Travel_Agency_Day_Tours-Stone_Town_Zanzibar_City_Zanzibar_Island_Zanzi.html" rel="external" target="_blank">
          <img className='logo-link' src={require('../logos/tripadvisor.png')} />
        </a>
        <a href="https://twitter.com/toursneno/" rel="external" target="_blank">
          <img className='logo-link' src={require('../logos/twitter.png')} />
        </a>
        <a href="https://www.instagram.com/p/BV0N1uLgjQY/" rel="external" target="_blank">
          <img className='logo-link' src={require('../logos/instagram.png')} />
        </a>
        <a href="https://www.youtube.com/channel/UCj4Ea35V-e1hfZ-otnxYPCg" rel="external" target="_blank">
          <img className='logo-link' src={require('../logos/youtube.png')} />
        </a>
        <div className="links-container">
          <Link to="">
            <p className="nav-link">Home</p>
          </Link>
          <Link to="booking">
            <p className="nav-link">Booking</p>
          </Link>
          <Link to="transportation">
            <p className="nav-link">Transportation</p>
          </Link>
          <Link to="about">
            <p className="nav-link">About</p>
          </Link>
          <Link to="gallery">
            <p className="nav-link">Gallery</p>
          </Link>
          <Link to="contact">
            <p className="nav-link">Contact</p>
          </Link>
        </div>
        <a href="http://www.vivoapplications.com" rel="external" target="_blank">
          <img className='vivo-logo' src={require('../logos/vivo.png')} />
          <p className="vivo-acknowledgement">Powered by Vivo Applications</p>
        </a>
      </div>
    );
  }
}

export default Footer;
