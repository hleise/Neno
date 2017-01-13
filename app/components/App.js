var React = require('react');
var Header = require('./layout/Header');
var Footer = require('./layout/Footer');
var Section = require('./layout/Section');
var SlickCSS = require('slick-carousel');
var CustomSlider = require('./layout/CustomSlider');

var App = React.createClass({
  getInitialState: function() {
    return {currentPage: 0, sectionsArray: ["Welcome", "Gallery", "Navigation", "Footer"]};
  },
  changePage: function(i) {
    this.setState((prevState,props) => {
      return {currentPage: i};
    });
  },
  render: function() {
    return (
      <div>
      <Header />
      {this.state.sectionsArray.map((name, i) => <Section key={i} name={name}/>)}
      <Footer />
      </div>
    );
  }
});

module.exports = App;
