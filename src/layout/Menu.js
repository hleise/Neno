import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  getWidth() {
    return 1
  }
  render() {
    var col = Math.floor(document.documentElement.clientWidth / 300);
    return (
      <div className={"menu " + this.props.menu} onClick={this.props.toggleMenu}>
       <div className='featured-tours'>
          {[...Array(Math.ceil(this.props.featuredTours.length / col))].map((rowOfTours, rowIndex) => (
              <div className='row' key={rowIndex}>
                {this.props.featuredTours.slice(rowIndex*col,(rowIndex*col)+col).map((tour, i) =>
                  <div className='block' key={i}>
                    <img className='image' src={require("../img/" + this.props.page + "/"  + this.props.imgFolder + "/" + (i+(rowIndex*col)) + ".jpg")} />
                     <Link to={"/" + this.props.page + "/" + tour.replace(/\s+/g, '-').toLowerCase()}>
                      <div className='title'>
                        <h3>
                         {this.props.featuredTours[(i+(rowIndex*col))]}
                        </h3>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
          ))
        }
       </div>
      </div>
    );
  }
}

export default Menu;
