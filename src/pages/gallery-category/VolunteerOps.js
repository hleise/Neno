import React from 'react';
import Gallery from 'react-photo-gallery';
import PageLayout from '../../layout/PageLayout';

export default class Sample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImageIndex: -1
    }
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(i) {
    this.setState((prevState, props) => {
      return {
        selectedImageIndex:i
      }
    })
  }
  render() {
    	return (
    	    <Gallery
          photos={PHOTO_SET}
          onClickPhoto={this.openLightbox}
          cols={3}
          margin={10}/>
    	);
        }
    }
    const PHOTO_SET = [
      {
        src: require('../../img/volunteer-ops/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/1.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/2.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/3.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/4.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/5.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/6.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/7.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/volunteer-ops/8.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },

];
