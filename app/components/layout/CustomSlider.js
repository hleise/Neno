var React = require('react');
var SliderImage = require('./SliderImage');
var Slider = require('react-slick-carousel');

var CustomSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      draggable: false,
      easing: 'easeOutQuad',
      accessibility: false,
      lazyLoad: false,
      infinite: true
    };
    var images = [];
    for(var i = 1; i < 6; i++) {
      images.push(<div className={'SliderImage'} key={i}>
        <h3>
        <img src={'../app/components/data/images/' + i + '.jpg'} alt={i} />
        </h3>
      </div>);
    }
    return (
      <Slider {...settings}>
      {images}
      </Slider>
    );
  }
});

module.exports = CustomSlider;
