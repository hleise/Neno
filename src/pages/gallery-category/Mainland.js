import React from 'react';
import Gallery from 'react-photo-gallery';
import PageLayout from '../../layout/PageLayout';

export default class Sample extends React.Component {
  openLightbox() {

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
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 1200,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/home/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },

];
