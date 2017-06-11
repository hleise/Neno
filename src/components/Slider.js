import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div className='slider'>
      <img className='first' src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      <img src={require("../img/8.jpg")}/>
      </div>
    );
  }
}

export default Slider;
