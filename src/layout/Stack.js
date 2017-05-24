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
    }
    this.toggleMenu = this.toggleMenu.bind(this);
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
        <div className='section' id={section.sectionTitle.replace(/\s+/g, '-').toLowerCase()}>
          <Banner
            page={this.props.page}
            sectionTitle={section.sectionTitle}
            toggleMenu={this.toggleMenu.bind(this, i)}
            i={i}
            />
          <Menu
            menu={this.state.menus[i]}
            featuredTours={section.featuredTours}
            page={this.props.page}
            imgFolder={section.imgFolder}
            />
        </div>
        )}
      </div>
    );
  }
}

export default Stack;
