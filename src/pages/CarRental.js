import React, { Component } from 'react';
import TextSection from '../components/TextSection.js';
import markdown1 from '../content/CarRental/Motorcyle.md';
import markdown2 from '../content/CarRental/Vespa.md';
import markdown3 from '../content/CarRental/VitaraPackage1.md';
import markdown4 from '../content/CarRental/VitaraPackage2.md';
import markdown5 from '../content/CarRental/VitaraPackage3.md';

class Section extends Component {
  rawMarkup(){
           return{ __html: markdown1,markdown2,markdown3,markdown4,markdown5};
  }
  render() {
    return (
      <div className='car-rental'>
      <TextSection>
        <h1>Car Rental</h1>
          <div className='home-markdown' dangerouslySetInnerHTML={this.rawMarkup()}>
          </div>
      </TextSection>
      </div>
    );
  }
}

export default Section;
