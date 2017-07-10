import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BookingButton extends Component {
  render() {
    return (
      <Link to="/simply-booking" className='book-now'>
        <div>Book Now</div>
      </Link>
    );
  }
}

export default BookingButton;
