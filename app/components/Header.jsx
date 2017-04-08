import React from 'react';
import Slider from './Slider.jsx';
var HeaderArrow = require('./HeaderArrow');
import NavBar from './NavBar.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className={'Header'}>
          <h1>Neno Tours & Travels</h1>
          <HeaderArrow />
          <NavBar className={'TopNavbar'}>
              <h3 id="TravelInfo">Travel Info</h3>
              <h3 id="Booking">Booking</h3>
              <h3 id="Safaris">Safaris</h3>
              <h3 id="Tours">Tours</h3>
          </NavBar>
          <Slider></Slider>
      </div>
      );
  }
}

export default Header;
