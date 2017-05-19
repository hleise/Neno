import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className={"menu" + " " + this.props.menu}>
        <div className='featured-tours'>
          <div className='row'>
            {this.props.featuredTours.slice(0,4).map((tour, i) =>
              <div className='block'>
                <div className='title'>
                  <h3>
                    <Link to={"/" + this.props.page + "/" + tour.replace(/\s+/g, '-').toLowerCase()}>
                      {this.props.featuredTours[i]}
                    </Link>
                  </h3>
                </div>
                <img className='image' src={require("../img/" + this.props.page + "/"  + this.props.imgFolder + "/" + i + ".jpg")} />
              </div>
            )}
          </div>
          <div className='row'>
            {this.props.featuredTours.slice(4,8).map((tour, i) =>
              <div className='block'>
                <div className='title'>
                  <h3>
                    <Link to={"/" + this.props.page + "/" + tour.replace(/\s+/g, '-').toLowerCase()}>
                      {this.props.featuredTours[i+4]}
                    </Link>
                  </h3>
                </div>
                <img className='image' src={require("../img/" + this.props.page + "/"  + this.props.imgFolder + "/" + (i+4) + ".jpg")} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
