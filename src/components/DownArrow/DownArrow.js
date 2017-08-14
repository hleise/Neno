import React, { Component } from 'react';
import SmoothScroll from '../../components/SmoothScroll'
import './DownArrow.scss'

class DownArrow extends Component {
  render() {
    return (
      <div className='down-arrow-container'>
        <SmoothScroll section={this.props.section}>
            <svg width="80px" height="80px" viewBox="0 -20 60 120">
              <polyline  transform="rotate(270 50 50) translate(10, -5)" fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
            25.63,75.8 0.375,38.087 25.63,0.375 "/>
            <polyline  transform="rotate(270 50 50) translate(50, -5)" fill="none" stroke="#f1f1f1" strokeWidth="9" strokeLinecap="miter" strokeLineJoin="round" points="
            25.63,75.8 0.375,38.087 25.63,0.375 "/>
            </svg>
        </SmoothScroll>
      </div>
    );
  }
}

export default DownArrow;
