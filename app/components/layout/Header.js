var React = require('react');
var NavBar = require('./NavBar');
var CustomSlider = require('./CustomSlider');

var Header = React.createClass({
  render: function() {
    return (
      <div className={'Header'}>
        <CustomSlider></CustomSlider>
        <NavBar />
        <h1>Neno Tours & Travels</h1>
      </div>
    );
  }
});

module.exports = Header;
