import React, { Component } from 'react';
import Stack from '../layout/Stack';

class Handler extends Component {
  render() {
    return (
      <div>
        <Stack
          className={this.props.folder}
          folder={this.props.folder}
          data={this.props.data}/>
      </div>
    );
  }
}

export default Handler;
