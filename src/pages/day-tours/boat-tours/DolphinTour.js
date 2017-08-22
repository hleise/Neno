import React, {Component} from 'react';
import markdown from '../../../content/day-tours/boat-tours/DolphinTours.md';
import Page from     '../../../layout/Page'

class DolphinTour extends Component {
  render() {
    return (
      <Page
        markdown={markdown}
        title='Dolphin Tour'
        page={'day-tours/boat-tours'}
        i={3}
      />
    );
  }
}

export default DolphinTour;
