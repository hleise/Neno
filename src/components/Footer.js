import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>
          © Neno Tours & Travels
        </h3>
        <a href="http://www.facebook.com" rel="external" target="_blank">
           <img className='fb-logo' src={require('../logos/facebook.png')} />
        </a>
        <a href="http://www.tripadvisor.com" rel="external" target="_blank">
          <img className='ta-logo' src={require('../logos/tripadvisor.png')} />
        </a>
      </div>
    );
  }
}

export default Footer;
