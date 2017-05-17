import React, { Component } from 'react';
import DayToursData from '../data/DayTours.json';

class Tours extends Component {
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
      if(prevState.menus[i] == "closed") {
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
      <div className="tours">
        {DayToursData.map((section, i) =>
        <div className='tours-section'>
          <div className="tours-banner" onMouseDown={this.toggleMenu.bind(this, i)}>
            <h1  className="section-title">
              {section.sectionTitle + " Tours"}
            </h1>
           <img className='section-image' src={require("../img/" + this.props.page + "/" + i + ".jpg")} />
          </div>
          <div className={"tours-menu" + " " + this.state.menus[i]}>
            <div className='featured-tours'>
              <div className='tours-row'>
                {section.featuredTours.slice(0,4).map((tourImg, i) =>
                  <div className='tour-block'>
                    <img className='tour-image' src={require("../img/" + this.props.page + "/"  + section.imgFolder + "/" + i + ".jpg")} />
                  </div>
                )}
              </div>
              <div className='tours-row'>
                {section.featuredTours.slice(4,8).map((tourImg, i) =>
                  <div className='tour-block'>
                    <img className='tour-image' src={require("../img/" + this.props.page + "/"  + section.imgFolder + "/" + (i+4) + ".jpg")} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Tours;
