import React, { Component } from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection';
import contactMark from '../content/Contact.md';
import PageLayout from '../layout/PageLayout';

class Contact extends Component {
  render() {
    return (
      <PageLayout>
        <div className="page">
          <div className="banner">
            <h1>Contact Us</h1>
            <img className='banner-image' src={require('../img/contact/0.jpg')} />
          </div>
          <div className="info">
            <HorizontalTextSection>
              <div className='markdown' dangerouslySetInnerHTML={{__html: contactMark}}>
              </div>
            </HorizontalTextSection>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default Contact;
