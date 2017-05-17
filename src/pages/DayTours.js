import React, { Component } from 'react';
import DayToursData from '../data/DayTours.json';

class DayTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'closed'
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState((prevState, props) => {
      if(prevState.menu == 'closed') {
        return {
            menu: 'open'
        }
      } else {
        return {
            menu: 'closed'
        }
      }
    });
    console.log(this.state.menu);
  }
  render() {
    // const row1 = section.featuredTours.slice(0,5);
    // const row2 = section.featuredTours.slice(5,9);
    // const row3 = section.featuredTours.slice(9,13);
    return (
      <div className="day-tours">
        {DayToursData.map((section, i) =>
        <div className='tours-section'>
          <div className="tours-banner">
            <h1 onMouseDown={this.toggleMenu} className="section-title">
              {section.sectionTitle + " Tours"}
            </h1>
           <img className='section-image' src={require("../img/day-tours/" + i + ".jpg")} />
          </div>
          <div className={"tours-menu" + " " + this.state.menu}>
            <div className='featured-tours'>
              <div className='tours-row'>
                {section.featuredTours.slice(0,4).map((tourImg, i) =>
                  <div className='tour-block'>
                    <img className='tour-image' src={require("../img/day-tours/"  + section.imgFolder + "/" + i + ".jpg")} />
                  </div>
                )}
              </div>
              <div className='tours-row'>
                {section.featuredTours.slice(4,8).map((tourImg, i) =>
                  <div className='tour-block'>
                    <img className='tour-image' src={require("../img/day-tours/"  + section.imgFolder + "/" + (i+4) + ".jpg")} />
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

export default DayTours;
