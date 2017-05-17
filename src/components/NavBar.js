import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-bar-button'>
          <div className='nav-bar-button-title'>
            <h3>Booking</h3>
          </div>
          <div className='dropdown-options'>
            <div className='dropdown-option'>
              <h3>Day Tours</h3>
            </div>
            <div className='dropdown-option'>
              <h3>Package Tours</h3>
            </div>
            <div className='dropdown-option'>
              <h3>Safaris</h3>
            </div>
          </div>
        </div>
        <div className='nav-bar-button'>
          <div className='nav-bar-button-title'>
            <h3>Transportation</h3>
          </div>
          <div className='dropdown-options'>
              <div className='dropdown-option'>
                <h3>Flight Info</h3>
              </div>
              <div className='dropdown-option'>
                <h3>Car Hire</h3>
              </div>
          </div>
        </div>
        <div className='nav-bar-button'>
          <div className='nav-bar-button-title'>
            <h3>Hotels</h3>
          </div>
        </div>
        <div className='nav-bar-button'>
          <div className='nav-bar-button-title'>
            <h3>History of Zanzibar</h3>
            </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
