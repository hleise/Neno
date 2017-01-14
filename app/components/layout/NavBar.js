var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <div className={'NavBar'}>
        <button>Travel Info</button>
        <button>Booking</button>
        <button>Safaris</button>
        <button>Tours</button>
      </div>
    );
  }
});

module.exports = NavBar;
