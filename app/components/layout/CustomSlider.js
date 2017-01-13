var React = require('react');
var Slider = require('react-slick');
var SlickCSS = require('slick-carousel');
var SliderElement = require('./SliderElement');

var CustomSlider = React.createClass({
  render: function () {

    var settings = {
      dots: true,
      slidesToShow: 1,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
      <Slider {...settings}>
        <SliderElement key={'1'} imageName={'1'}/>
        <SliderElement key={'2'} imageName={'2'}/>
        <SliderElement key={'3'} imageName={'3'}/>
        <SliderElement key={'4'} imageName={'4'}/>
        <SliderElement key={'5'} imageName={'5'}/>
      </Slider>
      </div>
    );
  }
});

module.exports = CustomSlider;
