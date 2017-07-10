import React, {Component} from 'react';
import manyaraMD from '../../../content/safaris/northern/LakeManyaraNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Manyara extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Lake Manyara National Park</h1>
          <img className='banner-image' src={require('../../../img/safaris/northern/3.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: manyaraMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Manyara;
