import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class PageLayout extends Component {
  componentDidMount() {
    window.scrollTo(0,0)
    setTimeout(function(){
      var iframe = document.getElementById('booking-iframe')
      iframe.style.display = 'none'
    },1200)
  }
  render() {
    return (
      <div className='page-layout'>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
