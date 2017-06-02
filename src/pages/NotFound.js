import React, { Component } from 'react';
import TextSection from '../components/TextSection';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>
          Uh oh! The page you were looking for was not found!
        </h1>
      </div>
    );
  }
}

export default NotFound;
