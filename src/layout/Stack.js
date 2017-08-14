import React, { Component } from 'react';
import Banner from './Banner';
import Menu from './Menu';
import Carousel from 'react-3d-carousel'

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        "closed",
        "closed",
        "closed",
        "closed"
      ],
      images: [
        require('../img/day-tours/boat/0.jpg'),
        require('../img/day-tours/boat/1.jpg'),
        require('../img/day-tours/boat/2.jpg'),
        require('../img/day-tours/boat/3.jpg'),
        require('../img/day-tours/boat/4.jpg'),
        require('../img/day-tours/boat/5.jpg')
      ],
      width: 400,
      layout: 'prism',
      ease: 'linear',
      duration: 400,
      carousel: false
    };
    this.toggleMenu = this.toggleMenu.bind(this)
    this.enableCarousel = this.enableCarousel.bind(this)
  }
  enableCarousel() {
    let width = Math.floor(document.documentElement.clientWidth);
    console.log(width)
    if( width <= 800) {
      this.setState({ carousel: true })
    } else {
      this.setState({ carousel: false })
    }
  }
  componentDidMount() {
    this.enableCarousel()
    window.addEventListener('resize', this.enableCarousel)
    setTimeout(function(){
      var iframe = document.getElementById('booking-iframe')
      if(iframe !== null) iframe.style.display = 'none'
    },1200)
  }
  toggleMenu(i) {
    this.setState((prevState, props) => {
      var newMenus = prevState.menus;
      if(prevState.menus[i] === "closed") {
        newMenus[i] = "open";
      } else {
        newMenus[i] = "closed";
      }
      return {
          menus: newMenus
      }
    });
  }
  render() {
    return (
      <div className={this.props.className}>
        { this.state.carousel ? <Carousel
          width={this.state.width}
          images={this.state.images}
          ease={this.state.ease}
          duration={this.state.duration}
          layout={this.state.layout}
        /> :


        this.props.data.map((section, i) =>
        <div className='section' id={section.title.replace(/\s+/g, '-').toLowerCase()}>
          <Menu
            toggleMenu={this.toggleMenu.bind(this, i)}
            page={this.props.page}
            featuredTours={section.featuredTours}
            menu={this.state.menus[i]}
            imgFolder={section.imgFolder}
            />
          <Banner
            rollOver={true}
            enableToggle={true}
            page={this.props.page}
            title={section.title}
            toggleMenu={this.toggleMenu.bind(this, i)}
            i={i}
            />
        </div>
        )


        }
      </div>
    );

  }
}




export default Stack;
