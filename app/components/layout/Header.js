var React = require('react');
var NavBar = require('./NavBar');
var SlickCSS = require('slick-carousel');

var Header = React.createClass({
  render: function() {
    return (
      <div className={'Header'}>
        <NavBar />
        <h1>Neno Tours & Travels</h1>
      </div>
    );
  }
});

module.exports = Header;
