import React, { Component } from 'react';


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
      <div className="tours">
        {this.props.data.map((section, i) =>
        <div className='tours-section'>
          <div className="tours-banner" onMouseDown={this.toggleMenu.bind(this, i)}>
            <div className="section-title">
              <h1>{section.sectionTitle}</h1>
            </div>
           <img className='section-image' src={require("../img/" + this.props.page + "/" + i + ".jpg")} />
          </div>
          <div className={"tours-menu" + " " + this.state.menus[i]}>
            <div className='featured-tours'>
              <div className='tours-row'>
                {section.featuredTours.slice(0,4).map((tourImg, i) =>
                  <div className='tour-block'>
                    <div className='tour-title'>
                      <h3>{section.featuredTours[i]}</h3>
                    </div>
                    <img className='tour-image' src={require("../img/" + this.props.page + "/"  + section.imgFolder + "/" + i + ".jpg")} />
                  </div>
                )}
              </div>
              <div className='tours-row'>
                {section.featuredTours.slice(4,8).map((tourImg, i) =>
                  <div className='tour-block'>
                    <div className='tour-title'>
                      <h3>{section.featuredTours[i+4]}</h3>
                    </div>
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
