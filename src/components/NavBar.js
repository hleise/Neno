import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='nav-bar-button'>
          <div className='nav-bar-button-title'>
            Booking
          </div>
          <div className='dropdown-options'>
            <div className='dropdown-option'>
              Day Tours
            </div>
            <div className='dropdown-option'>
              Package Tours
            </div>
            <div className='dropdown-option'>
              Safaris
            </div>
          </div>
        </div>
        <div className='nav-bar-button'>
          Transportation
        </div>
        <div className='nav-bar-button'>
          Hotels
        </div>
        <div className='nav-bar-button'>
          History of Zanzibar
        </div>
      </div>
    );
  }
}

export default NavBar;