import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MenuButton from './MenuButton'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MenuButtonStyle: 'shown'
    };

    this.toggleMenuBar = () => {
      this.setState((prevState, props) => {
        if(prevState.MenuButtonStyle === 'shown') {
          return {
            MenuButtonStyle: 'not-shown'
          }
        } else if (prevState.MenuButtonStyle === 'not-shown') {
          return {
            MenuButtonStyle: 'shown'
          }
        }
      })
    };

    this.closeMenuBar = () => {
      this.refs.menuButton.closeIcon();
      this.setState(() => {
        return {
          MenuButtonStyle: 'shown'
        }
      });
    };
  }

  render() {
    return (
      <div>
        <div className='nav-bar-container'>
          <div className='nav-bar'>
          <MenuButton ref='menuButton' className={this.state.MenuButtonStyle} togglePosition={this.toggleMenuBar}/>
          <div className='nav-bar-button'>
            <div className='nav-bar-button-title' onClick={this.closeMenuBar}>
              <h3>
                <Link to="">
                   <img className='logo' src={require('../logos/logo.png')} />
                </Link>
              </h3>
            </div>
          </div>
            <div className='nav-bar-button' onClick={this.closeMenuBar}>
              <div className='nav-bar-button-title'>
                <h3>
                  <Link to="/booking">
                    Booking
                  </Link>
                </h3>
              </div>
              <div className='dropdown-options'>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/tours">
                      Day Tours
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/packages">
                      Packages
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/safaris">
                      Safaris
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/hotels">
                      Hotels
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className='nav-bar-button' onClick={this.closeMenuBar}>
              <div className='nav-bar-button-title'>
                <h3>
                  <Link to="/transportation">
                    Transportation
                  </Link>
                </h3>
              </div>
              <div className='dropdown-options'>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/car-rental">
                      Car Rental
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/flight-info">
                      Flight Info
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className='nav-bar-button' onClick={this.closeMenuBar}>
              <div className='nav-bar-button-title'>
                <h3>
                  <Link to="/about">
                     About
                  </Link>
                </h3>
              </div>
              <div className='dropdown-options'>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/general-information">
                      General Information
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/history-of-zanzibar">
                      History of Zanzibar
                    </Link>
                  </h3>
                </div>
                <div className='dropdown-option'>
                  <h3>
                    <Link to="/volunteers">
                      Volunteers
                    </Link>
                  </h3>
                </div>
            </div>
          </div>
            <div className='nav-bar-button' onClick={this.closeMenuBar}>
              <div className='nav-bar-button-title'>
                <h3>
                  <Link to="/gallery">
                     Gallery
                  </Link>
                </h3>
              </div>
            </div>
            <div className='nav-bar-button' onClick={this.closeMenuBar}>
              <div className='nav-bar-button-title'>
                <h3>
                  <Link to="/contact">
                     Contact
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
          {this.props.children}
    </div>
    );
  }
}

export default NavBar;
