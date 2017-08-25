import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col: 4
    };
    this.getWidth = this.getWidth.bind(this)
  }
  getWidth() {
    let col = Math.floor(document.documentElement.clientWidth / 250);
    this.setState({ col })
  }
  componentDidMount() {
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
  }
  render() {
    var objects = [
      {
        "title":"Jambiani Village",
        
      },
      {
        "title":"Kidichi Village",
        
      },
      {
        "title":"Nungwi Village",
        
      },
      {
        "title":"Spice Tour",
        
      }
    ]

    var rows = Math.ceil(this.props.experiences.length / this.state.col)

    var experiences = this.props.experiences.map((e) => { return e.title })

    return (
      <div className={"menu " + this.props.menu} onClick={this.props.toggleMenu}>
       <div className='featured-tours'>
          {[...Array(rows)].map((row, rowIndex) => (
              <div className='row' key={rowIndex}>
              {experiences.slice(rowIndex*this.state.col,(rowIndex*this.state.col)+this.state.col).map((experience, i) =>
                    <div className='block' key={i}>
                      <img className='image' src={require(`../img/${this.props.folder}/${this.props.subFolder}/${(i+(rowIndex*this.state.col))}.jpg`)} />
                       <Link to={"/" + this.props.folder + "/" + this.props.subFolder + "/" + experience.replace(/\s+/g, '-').toLowerCase()}>
                        <div className='title'>
                          <h3>
                           {experiences[(i+(rowIndex*this.state.col))]}
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


//<img className='image' src={require("../img/" + this.props.folder + "/" + (i+(rowIndex*this.state.col)) + ".jpg")} />




export default Menu;
