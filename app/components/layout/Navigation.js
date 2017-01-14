var React = require('react');
var NavBar = require('./NavBar');

var Navigation = React.createClass({
  render: function() {
    return (
      <div className={'Navigation'}>
        <h2>Navigation</h2>
          <NavBar className={'BottomNavBar'} goTo={'Gallery'}>
            <h3 id="TravelInfo1">Travel Info</h3>
              <h3 id="Booking1">Booking</h3>
              <h3 id="Safaris1">Safaris</h3>
              <h3 id="Tours1">Tours</h3>
          </NavBar>
      </div>
    );
  }
});

module.exports = Navigation;
