import React, {Component} from 'react';
import kataviMD from '../../../content/safaris/western-circuit-safaris/KataviNationalPark.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Katavi extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Katavi National Park</h1>
          <img className='banner-image' src={require('../../../img/safaris/western-circuit-safaris/0.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: kataviMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Katavi;
