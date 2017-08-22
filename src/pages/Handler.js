import React, { Component } from 'react';
import Stack from '../layout/Stack';

class Handler extends Component {
  render() {
    return (
      <div>
        <Stack
          className={this.props.page}
          page={this.props.page}
          data={this.props.data}/>
      </div>
    );
  }
}

export default Handler;
