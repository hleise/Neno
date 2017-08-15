import React, { Component } from 'react';
import Banner from './Banner';
import Menu from './Menu';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        "closed",
        "closed",
        "closed",
        "closed"
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this)
    this.enablegrid = this.enablegrid.bind(this)
  }
  enablegrid() {
    let width = Math.floor(document.documentElement.clientWidth);
    console.log(width)
    if( width <= 800) {
      //currently turned off
      this.setState({
        grid: true,
        menus: [
          "open",
          "open",
          "open",
          "open"
        ] })
    } else {
      this.setState({ grid: false })
    }
  }
  componentDidMount() {
    this.enablegrid()
    window.addEventListener('resize', this.enablegrid)
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
        {this.props.data.map((section, i) =>
        <div className='section' id={section.title.replace(/\s+/g, '-').toLowerCase()}>
          <Menu
            toggleMenu={this.toggleMenu.bind(this, i)}
            page={this.props.page}
            featuredTours={section.featuredTours}
            menu={this.state.menus[i]}
            imgFolder={section.imgFolder}
            />
          {this.state.grid ? '' :
            <Banner
            rollOver={true}
            enableToggle={true}
            page={this.props.page}
            title={section.title}
            toggleMenu={this.toggleMenu.bind(this, i)}
            i={i}
            />
          }
        </div>
        )}
      </div>
    );
  }
}

export default Stack;
