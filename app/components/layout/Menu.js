var React = require('react');

var Menu = React.createClass({
  handleChange: function (e) {
    var name = e.target.value;
    this.props.onChange(name);
  },

  render: function () {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Europa">Europa</option>
          <option value="Io">Io</option>
          <option value="Iris">Iris</option>
        </select>
      </div>
    );
  }
});

module.exports = Menu;
