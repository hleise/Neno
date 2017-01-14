var React = require('react');
var Header = require('./layout/Header');
var Footer = require('./layout/Footer');
var BaselineFooter = require('./layout/BaselineFooter');
var Section = require('./layout/Section');


var App = React.createClass({
  getInitialState: function() {
    return {currentPage: 0, sectionsArray: ["Welcome", "Gallery", "Navigation"]};
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
      <BaselineFooter />
      </div>
    );
  }
});

module.exports = App;
