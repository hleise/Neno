import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className={"menu" + " " + this.props.menu} onMouseDown={this.props.toggleMenu}>
       <div className='featured-tours'>
          {[...Array(Math.ceil(this.props.featuredTours.length / 4))].map((rowOfTours, rowIndex) => (
              <div className='row' key={rowIndex}>
                {this.props.featuredTours.slice(rowIndex*4,(rowIndex*4)+4).map((tour, i) =>
                  <div className='block' key={i}>
                    <img className='image' src={require("../img/" + this.props.page + "/"  + this.props.imgFolder + "/" + (i+(rowIndex*4)) + ".jpg")} />
                     <Link to={"/" + this.props.page + "/" + tour.replace(/\s+/g, '-').toLowerCase()}>
                      <div className='title'>
                        <h3>
                         {this.props.featuredTours[(i+(rowIndex*4))]}
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
