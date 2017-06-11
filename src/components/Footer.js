import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>
          © Neno Tours & Travels
        </h3>
        <Link to="http://www.facebook.com">
           <img className='fb-logo' src={require('../logos/facebook.png')} />
        </Link>
        <Link to="">
          <img className='ta-logo' src={require('../logos/tripadvisor.png')} />
        </Link>
      </div>
    );
  }
}

export default Footer;
