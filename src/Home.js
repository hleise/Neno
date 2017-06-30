import React, { Component } from 'react';
import HorizontalTextSection from './components/HorizontalTextSection.js';
import HomeContent from './content/home.md';
import PageLayout from './layout/PageLayout';
import Slider from './components/Slider';
var Carousel = require('nuka-carousel');
import SmoothScroll from './components/SmoothScroll'
var SimplybookWidget = require('./SimplyBookMe')

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
  render() {
    var widget = new SimplybookWidget({
      "widget_type":"iframe",
      "url":"https:\/\/vivoapps.simplybook.me",
      "theme":"default",
      "theme_settings":{
        "sb_base_color":"#f1f1f1",
        "booking_nav_bg_color":"#ffffff",
        "body_bg_color":"#f1f1f1",
        "dark_font_color":"#494949",
        "light_font_color":"#ffffff",
        "btn_color_1":"#5e7da7"},
        "timeline":"modern",
        "datepicker":"top_calendar",
        "is_rtl":false,
        "app_config":{
          "predefined":[]}
        });
    return (
      <div className='home'>
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
          <div className='home-header'>
            <h1>Adventure awaits.</h1>
          </div>
          <SmoothScroll section="home-page">
            <div className='home-page-smooth-scroll-container'>
              <button>
                <svg width="80px" height="80px" viewBox="0 -20 60 120">
                  <polyline  transform="rotate(270 50 50) translate(10, -5)" fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
               25.63,75.8 0.375,38.087 25.63,0.375 "/>
               <polyline  transform="rotate(270 50 50) translate(50, -5)" fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
            25.63,75.8 0.375,38.087 25.63,0.375 "/>
                </svg>
              </button>
            </div>
          </SmoothScroll>
          <div className="page" id="home-page">
              <div className="info">
                <HorizontalTextSection>
                  <div className='markdown'>
                    <h1>Welcome to Neno Tours | Karibu Neno Tours</h1>
                  </div>
                </HorizontalTextSection>
                <HorizontalTextSection>
                  <div className='markdown' dangerouslySetInnerHTML={{__html: HomeContent}} />
                </HorizontalTextSection>
              </div>
          </div>
          {widget.init()}
        </PageLayout>
      </div>
    );
  }
}

export default Home;
