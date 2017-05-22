import React, { Component } from 'react';
import SmoothScroll from '../helpers/SmoothScroll';

class Footer extends Component {
  render() {
    return (
      <div className='hotels'>
        <div className='hotels-section'>
          <img className='hotels-image' src={require('../img/hotels/0.jpg')} />
            <div className='nav-bar hotels-dropdown'>
              <div className='nav-bar-button'>
                <div className='nav-bar-button-title'>
                  <h3>
                      Types of Resorts
                  </h3>
                </div>
                <div className='dropdown-options'>
                  <div className='dropdown-option'>
                    <SmoothScroll section='beach-resorts'>
                      <h3>
                        Beach Resorts
                      </h3>
                    </SmoothScroll>
                  </div>
                  <div className='dropdown-option'>
                    <SmoothScroll section='beach-clubs'>
                      <h3>
                        Beach Clubs
                      </h3>
                    </SmoothScroll>
                  </div>
                  <div className='dropdown-option'>
                    <SmoothScroll section='city-hotels'>
                      <h3>
                        City Hotels
                      </h3>
                    </SmoothScroll>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;