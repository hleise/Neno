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
        src: require('../../img/featured-gallery/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/1.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/2.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/3.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/4.jpg'),
        width: 1200,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/5.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/6.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/7.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/featured-gallery/8.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },

];
