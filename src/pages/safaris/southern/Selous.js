import React, {Component} from 'react';
import selousMD from '../../../content/safaris/southern/SelousGameReserve.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Selous extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Selous Game Refuge</h1>
          <img className='banner-image' src={require('../../../img/safaris/southern/0.jpg')}/>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: selousMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Selous;
