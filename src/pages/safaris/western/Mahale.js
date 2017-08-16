import React, {Component} from 'react';
import mahaleMD from '../../../content/safaris/western/MahaleMountains.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Mahale extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Mahale Mountains National Park</h1>
          <img className='banner-image' src={require('../../../img/safaris/western/1.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: mahaleMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Mahale;
