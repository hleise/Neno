var React = require('react');

var Display = React.createClass({
  render: function () {
		var name = this.props.name;
    return (
      <div>
        <h1>{name}</h1>
        <p>{name} is logged in.</p>
        </div>
    );
  }
});

module.exports = Display;
