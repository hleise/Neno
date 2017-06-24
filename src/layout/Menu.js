import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      col: 4
    }
    this.getWidth = this.getWidth.bind(this)
  }
  getWidth() {
    console.log('asdf');
    let col = Math.floor(document.documentElement.clientWidth / 250)
    this.setState({ col })
  }
  render() {
    window.addEventListener('resize', this.getWidth)

    return (
      <div className={"menu " + this.props.menu} onClick={this.props.toggleMenu}>
       <div className='featured-tours'>
          {[...Array(Math.ceil(this.props.featuredTours.length / this.state.col))].map((rowOfTours, rowIndex) => (
              <div className='row' key={rowIndex}>
                {this.props.featuredTours.slice(rowIndex*this.state.col,(rowIndex*this.state.col)+this.state.col).map((tour, i) =>
                  <div className='block' key={i}>
                    <img className='image' src={require("../img/" + this.props.page + "/"  + this.props.imgFolder + "/" + (i+(rowIndex*this.state.col)) + ".jpg")} />
                     <Link to={"/" + this.props.page + "/" + tour.replace(/\s+/g, '-').toLowerCase()}>
                      <div className='title'>
                        <h3>
                         {this.props.featuredTours[(i+(rowIndex*this.state.col))]}
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
