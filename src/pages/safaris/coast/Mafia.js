import React, {Component} from 'react';
import mafiaMD from '../../../content/safaris/coast/MafiaArchipelago.md';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Mafia extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Mafia Archipelago</h1>
          <img className='banner-image' src={require('../../../img/safaris/coast/0.jpg')}/>
        </div>
        <div className="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: mafiaMD}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Mafia;
