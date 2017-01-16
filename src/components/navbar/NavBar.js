var React = require('react');
var SmoothScroll = require('./SmoothScroll');

var NavBar = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        <SmoothScroll goTo={this.props.goTo}>
          {this.props.children}
        </SmoothScroll>
      </div>
    );
  }
});

module.exports = NavBar;
