import React from 'react';
import Gallery from 'react-photo-gallery';
import PageLayout from '../../layout/PageLayout';

export default class Sample extends React.Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox} cols={2} margin={10}/>
	);
    }
}
const PHOTO_SET = [
  {
    src: require('../../img/home/0.jpg'),
    srcset: [
      require('../../img/home/0.jpg'),
      require('../../img/home/0.jpg'),
      require('../../img/home/0.jpg'),
      require('../../img/home/0.jpg'),
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: 'http://example.com/example/img2.jpg',
    srcset: [
      'http://example.com/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
  }
];
