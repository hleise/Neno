import React, {Component} from 'react';
import markdown from '../../../content/day-tours/boat-tours/ChumbeIslandTrip.md';
import Page from     '../../../layout/Page'

class ChumbeIsland extends Component {
  render() {
    return (
      <Page
        markdown={markdown}
        title='Chumbe Island'
        page={'day-tours/boat-tours'}
        i={2}
      />
    );
  }
}

export default ChumbeIsland;
