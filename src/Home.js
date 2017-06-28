import React, { Component } from 'react';
import HorizontalTextSection from './components/HorizontalTextSection.js';
import HomeContent from './content/home.md';
import PageLayout from './layout/PageLayout';
import Slider from './components/Slider';
var Carousel = require('nuka-carousel');

var buttonStyle = {
  border:'none',
  color:'white',
  background: 'transparent',
  fontSize: '1em',
  outline: 'none',
  zIndex: '99',
  cursor: 'pointer'
}

var Decorators = [{
  component: React.createClass({
    render() {
      return (
        <button
        style={buttonStyle}
        onClick={this.props.previousSlide}>
        <svg width="80px" height="80px" viewBox="0 -20 60 120">
          <polyline fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
       45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
        </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
},
{
  component: React.createClass({
    render() {
      return (
        <button
        style={buttonStyle}
        onClick={this.props.nextSlide}>
          <svg width="80px" height="80px" viewBox="0 -20 60 120">
            <polyline  transform="rotate(180 50 50) translate(20, 26)" fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
         45.63,75.8 0.375,38.087 45.63,0.375 "/>
          </svg>
        </button>
      )
    }
  }),
  position: 'CenterRight',
  style: {
    padding: 20
  }
}];


class Home extends Component {
  /*componentWillMount() {
const script = document.createElement("script");

script.src = "//simplybook.me/v2/widget/widget.js";
script.async = true;

document.body.appendChild(script);
} */
  render() {
  /*  var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/vivoapps.simplybook.me","theme":"tender","theme_settings":{"sb_base_color":"#D42853","booking_nav_bg_color":"#dbdbd8","body_bg_color":"#ffffff","dark_font_color":"#474747","light_font_color":"#ffffff","btn_color_1":"#517dc4"},"timeline":"modern_week","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":{"provider":"1","service":"1"}}});*/
    return (
      <div>
        <PageLayout>
          <Carousel
            dragging={true}
            easing="easeInOutSine"
            speed={500}
            decorators={Decorators}
            wrapAround>
            <img src={require('./img/home/0.jpg')}/>
            <img src={require('./img/home/1.jpg')}/>
            <img src={require('./img/home/2.jpg')}/>
            <img src={require('./img/home/3.jpg')}/>
            <img src={require('./img/home/4.jpg')}/>
            <img src={require('./img/home/5.jpg')}/>
            <img src={require('./img/home/6.jpg')}/>
            <img src={require('./img/home/7.jpg')}/>
          </Carousel>

          <div className="page">
          <script src="//simplybook.me/v2/widget/widget.js"></script>
              <div className="info">
                <HorizontalTextSection>
                  <div className='markdown' dangerouslySetInnerHTML={{__html: HomeContent}} />
                </HorizontalTextSection>
              </div>
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default Home;
