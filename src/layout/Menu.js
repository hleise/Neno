import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className={"menu" + " " + this.props.menu}>
       <div className='back-button' onMouseDown={this.props.toggleMenu}>
         <svg width="80px" height="80px" viewBox="0 -20 60 120">
          <polyline fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
       45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
       </div>
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
