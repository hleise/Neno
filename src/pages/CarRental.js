import React, { Component } from 'react';

import HorizontalTextSection from '../components/HorizontalTextSection.js';

import markdown1 from '../content/CarRental/Motorcyle.md';
import markdown2 from '../content/CarRental/Vespa.md';
import markdown3 from '../content/CarRental/VitaraPackage1.md';
import markdown4 from '../content/CarRental/VitaraPackage2.md';
import markdown5 from '../content/CarRental/VitaraPackage3.md';

import StaticBanner from '../layout/StaticBanner';

class Section extends Component {
  render() {
    const imageArray = ['bike1','bike2','vitara1','vitara2','vitara3'];
    const mdArray = [markdown1,markdown2,markdown3,markdown4,markdown5];
    return (
      <div className='car-rental'>
        <HorizontalTextSection>
          <h1> Car Rental </h1>
      <div className='car-rental-blocks'>
        {imageArray.map((img,i) => (
        <div key={i} className='car-wrapper'>
          <img className='img' src={require('../img/' + imageArray[i] + '.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={{__html: mdArray[i]}}>
          </div>
        </div>
        ))}
      </div>
      </HorizontalTextSection>
      </div>
    );
  }
}

export default Section;
