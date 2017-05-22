import React, { Component } from 'react';
/* text of page styled and wrapped like home */
import TextSection from '../components/TextSection.js';
/*import 5 .md for 5 vehicles*/
import markdown1 from '../content/CarRental/Motorcyle.md';
import markdown2 from '../content/CarRental/Vespa.md';
import markdown3 from '../content/CarRental/VitaraPackage1.md';
import markdown4 from '../content/CarRental/VitaraPackage2.md';
import markdown5 from '../content/CarRental/VitaraPackage3.md';

class Section extends Component {
  /*let us reimplement as one function that returns an array of .md to assign to specifc div */
  createMarkup1(){return{ __html: markdown1};}
  createMarkup2(){return{ __html: markdown2};}
  createMarkup3(){return{ __html: markdown3};}
  createMarkup4(){return{ __html: markdown4};}
  createMarkup5(){return{ __html: markdown5};}
  render() {
    return (
      <div className='car-rental'>
      <TextSection>
        <h1>Car Rental</h1>
          <div className='car-markdown1' dangerouslySetInnerHTML={this.createMarkup1()}>
          </div>
          <div className='car-markdown2' dangerouslySetInnerHTML={this.createMarkup2()}>
          </div>
          <div className='car-markdown3' dangerouslySetInnerHTML={this.createMarkup3()}>
          </div>
          <div className='car-markdown4' dangerouslySetInnerHTML={this.createMarkup4()}>
          </div>
          <div className='car-markdown5' dangerouslySetInnerHTML={this.createMarkup5()}>
          </div>
      </TextSection>
      </div>
    );
  }
}

export default Section;
