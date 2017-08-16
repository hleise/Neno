import React, {Component} from 'react';
import darMD from '../../../content/safaris/coast/DarEsSalaam.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Dar extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Dar es Salaam</h1>
          <img className='banner-image' src={require('../../../img/safaris/coast/0.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: darMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Dar;
