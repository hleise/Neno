import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>

        </div>
        <p className="App-intro">
          Neno Tours
        </p>
        <Section name='about' description='about us'/>
        <Section name='contact' description='about us'/>
        <Section name='home' description='about us'/>
        <Section name='info' description='about us'/>
        <Section name='tours' description='about us'/>
        <Section name='safaris' description='about us'/>
      </div>
    );
  }
}

export default Home;
