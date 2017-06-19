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
        src: require('../../img/hotels/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/package-tours/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/package-tours/1.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/package-tours/northern-package/1.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/package-tours/southern-package/1.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/package-tours/southern-package/2.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/safaris/long/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/safaris/long/2.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/flight-info/0.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },

];
