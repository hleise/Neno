import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>
          © Neno Tours & Travels
        </h3>
        <a href="https://www.facebook.com/NenoToursNtravels" rel="external" target="_blank">
           <img className='fb-logo' src={require('../logos/facebook.png')} />
        </a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g488129-d7391505-Reviews-Neno_Tours_Travel_Agency_Day_Tours-Stone_Town_Zanzibar_City_Zanzibar_Island_Zanzi.html" rel="external" target="_blank">
          <img className='ta-logo' src={require('../logos/tripadvisor.png')} />
        </a>
        <Link to="contact">
          Contact
        </Link>
      </div>
    );
  }
}

export default Footer;
