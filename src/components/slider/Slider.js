var React = require('react');
var SlickSliderImage = require('./SlickSliderImage');
var SlickSlider = require('react-slick-carousel');

var CustomSlickSlider = React.createClass({
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
      images.push(<div className={'SlickSliderImage'} key={i}>
        <h3>
        <img src={'../app/components/data/images/' + i + '.jpg'} alt={i} />
        </h3>
      </div>);
    }
    return (
      <SlickSlider {...settings}>
      {images}
      </SlickSlider>
    );
  }
});

module.exports = CustomSlickSlider;
