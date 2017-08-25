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
    this.enableGrid = this.enableGrid.bind(this)
  }
  enableGrid() {
    let width = Math.floor(document.documentElement.clientWidth);
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
    this.enableGrid()
    window.addEventListener('resize', this.enableGrid)
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
        <div className='section' key={i} id={section.title.replace(/\s+/g, '-').toLowerCase()}>
          <Menu
            toggleMenu={this.toggleMenu.bind(this, i)}
            subFolder={section.folder}
            folder={this.props.folder}
            experiences={section.experiences}
            menu={this.state.menus[i]}
            />
          {this.state.grid ? '' :
            <Banner
            rollOver={true}
            enableToggle={true}
            folder={this.props.folder}
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
