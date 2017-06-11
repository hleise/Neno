import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h2>© Neno Tours & Travels</h2>
        <a href="https://www.facebook.com/NenoToursNtravels" rel="external" target="_blank">
           <img className='logo' src={require('../logos/facebook.png')} />
        </a>
        <div id="TA_cdsratingsonlywide730" class="TA_cdsratingsonlywide">
        <ul id="WEQxma20Mkt2" class="TA_links 5is8R91jcm">
        <li id="LR06aLardN" class="DgWVTXBBL">
        <a target="_blank" href="https://www.tripadvisor.com/"><img src="https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/></a>
        </li>
        </ul>
        </div>
        <script src="https://www.jscache.com/wejs?wtype=cdsratingsonlywide&amp;uniq=730&amp;locationId=7391505&amp;lang=en_US&amp;border=false&amp;shadow=false&amp;display_version=2"></script>
        <Link to="contact">
          <h2>Contact</h2>
        </Link>
      </div>
    );
  }
}

export default Footer;
