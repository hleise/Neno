import React, {Component} from 'react';
import markdown from '../../../content/day-tours/boat/PrisonIsland.md';
import Page from     '../../../layout/Page'

class PrisonIsland extends Component {
  render() {
    return (
      <Page
        markdown={markdown}
        title='Prison Island'
        page={'day-tours/boat'}
        i={4}
      />
    );
  }
}

export default PrisonIsland;
