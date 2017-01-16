var React = require('react');
var Header = require('../header/Header');
var Footer = require('../footer/Footer');
var Navigation = require('../navigation/Navigation');
var BaselineFooter = require('../baseline_footer/BaselineFooter');
var Section = require('../section/Section');

var App = React.createClass({
  getInitialState: function() {
    return {currentPage: 0, sectionsArray: ["Welcome", "Gallery"]};
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
      {this.state.sectionsArray.map((name, i) => <Section key={i} id={i} name={name}/>)}
      <Navigation />
      <Footer />
      <BaselineFooter />
      </div>
    );
  }
});

module.exports = App;
