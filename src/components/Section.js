var React = require('react');
var NavBar = require('./NavBar');


var Section = React.createClass({
  render: function() {
    return (
      <div className={'Section'} id={this.props.name}>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
});

module.exports = Section;
