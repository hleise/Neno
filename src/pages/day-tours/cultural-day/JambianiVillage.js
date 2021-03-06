import React, {Component} from 'react';
import markdown from '../../../content/day-tours/cultural-day/JamVillageTour.md';
import Page from     '../../../layout/Page'

class Jambiani extends Component {
  render() {
    return (
      <Page
        markdown={markdown}
        title='Jambiani Village'
        page={'day-tours/cultural-day'}
        i={0}
      />
    );
  }
}

export default Jambiani;
