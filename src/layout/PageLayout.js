import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class PageLayout extends Component {
  render() {
    return (
      <div className='page-layout'>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
