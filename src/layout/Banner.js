import React, { Component } from 'react';
import DownArrow from '../components/DownArrow/DownArrow'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if(this.props.enableToggle) {
      this.props.toggleMenu()
    }
  }
  render() {
    return (
      <div className={"banner" + (this.props.rollOver ? ' roll-over' : '')}  onMouseDown={this.handleClick}>
        <div className="banner-title">
          <h1>{this.props.title}</h1>
          <h2>{this.props.rollOver ? 'Click here to see more...' : ''}</h2>
        </div>
       <img className='banner-image' src={require("../img/" + this.props.folder + "/" + this.props.i + ".jpg")} />
       {this.props.downArrow ? <DownArrow section='info'/> : ''}
     </div>
    );
  }
}

export default Banner;
