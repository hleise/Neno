import React, { Component } from 'react';
/* text of page styled and wrapped like home */
import HorizontalTextSection from '../components/HorizontalTextSection.js';
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
      <HorizontalTextSection>
        <h1>Car Rental</h1>
          <img className='img' src={require('../img/bike1.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={this.createMarkup1()}>
          </div>
          <img className='img' src={require('../img/bike2.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={this.createMarkup2()}>
          </div>
          <img className='img' src={require('../img/vitara1.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={this.createMarkup3()}>
          </div>
          <img className='img' src={require('../img/vitara2.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={this.createMarkup4()}>
          </div>
          <img className='img' src={require('../img/vitara3.jpg')} />
          <div className='car-markdown' dangerouslySetInnerHTML={this.createMarkup5()}>
          </div>
      </HorizontalTextSection>
      </div>
    );
  }
}

export default Section;
