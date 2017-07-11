import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class PageLayout extends Component {
  render() {
    // var iframe = document.getElementById("booking-iframe");
    // var html = "";
    //
    // iframe.contentWindow.document.open();
    // iframe.contentWindow.document.write(html);
    // iframe.contentWindow.document.close();
    return (
      <div className='page-layout'>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
