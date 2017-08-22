import React, {Component} from 'react';
import HorizontalTextSection from '../../../components/HorizontalTextSection.js';
import BookingButton from "../../../components/BookingButton";


class Serengeti extends Component {
  render() {
    return (
      <div className="page">
        <div className="banner">
          <h1>Serengeti National Park</h1>
        </div>
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown'>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Serengeti;
