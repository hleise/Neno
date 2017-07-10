import React, {Component} from 'react';
import mikumiMD from '../../../content/safaris/southern/MikumiUdzungwa.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Mikumi extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Mikumi and Udzungwa National Parks</h1>
          <img className='banner-image' src={require('../../../img/safaris/southern/2.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: mikumiMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Mikumi;
