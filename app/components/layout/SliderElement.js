var React = require('react');
var SlickCSS = require('slick-carousel');

var SliderElement = React.createClass({
  render: function () {
    return (
      <div className={'SliderElement'}>
        <h3>
          <img src={'../app/components/data/images/' + this.props.imageName + '.jpg'} alt={this.props.imageName} />
        </h3>
      </div>
    );
  }
});

module.exports = SliderElement;
