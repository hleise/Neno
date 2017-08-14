import React, { Component } from 'react'
import HorizontalTextSection from './components/HorizontalTextSection.js'
import HomeContent from './content/home.md'
import PageLayout from './layout/PageLayout'
import Slider from './components/Slider'
var Carousel = require('nuka-carousel')
import DownArrow from './components//DownArrow/DownArrow'


var buttonStyle = {
  border:'none',
  color:'white',
  background: 'transparent',
  fontSize: '1em',
  outline: 'none',
  zIndex: '99',
  cursor: 'pointer'
};

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
  constructor(props) {
    super(props)
    this.state = {
      selected: "-selected",
      vertical: false,
      dragging: false
    }
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
        const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
        if(w < 800) {
          this.setState({
            vertical: true,
            dragging: false
          })
          return;
        } else {
          this.setState({
            vertical: false,
            dragging: true
          })
        }
        return;
    })
    setInterval(() => {
      if(this.state.selected === "-unselected") {
        this.setState({
          selected: "-selected"
        })
      } else {
        this.setState({
          selected: "-unselected"
        })
      }
    }, 3000)
  }
  render() {
    var iframe = document.getElementById("booking-iframe");
    if(iframe) {
      iframe.style.display = "none";
    }

    return (
      <div className='home'>
        <PageLayout>
          <Carousel
            dragging={this.state.dragging}
            easing="easeInQuad"
            speed={500}
            autoplay={true}
            autoplayInterval={4000}
            vertical={this.state.vertical}
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
            <div className="nav-link">
              <li className={"nav-item-above nav-item-above" + this.state.selected}>
                <h1>Neno Tours</h1>
              </li>
              <li className={"nav-item nav-item" + this.state.selected}>
                <h1>Adventure Awaits</h1>
              </li>
            </div>
          </div>
          <DownArrow section='home-page'/>
          <div className="page" id="home-page">
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
