import React from 'react';
import Gallery from 'react-photo-gallery';
import PageLayout from '../../layout/PageLayout';
import Lightbox from 'react-images';

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.getWidth = function() {
      return Math.floor(document.documentElement.clientWidth / 300);
    };
    this.state = {
      currentImage: 0,
      col: this.getWidth(),
      lightboxIsOpen: false
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.setWidth = this.setWidth.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  	this.openLightbox = this.openLightbox.bind(this);
  	this.gotoNext = this.gotoNext.bind(this);
  	this.gotoPrevious = this.gotoPrevious.bind(this);
    window.addEventListener('resize', this.setWidth)
  }
  openLightbox(index, event){
      event.preventDefault();
      this.setState({
          currentImage: index,
          lightboxIsOpen: true
      });
  }
  closeLightbox(){
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
  }
  gotoPrevious(){
      this.setState({
          currentImage: this.state.currentImage - 1,
      });
  }
  gotoNext(){
      if(PHOTO_SET.length - 2 === this.state.currentImage){

      }
      this.setState({
          currentImage: this.state.currentImage + 1,
      });
  }
  setWidth() {
    let col = this.getWidth();
    this.setState({ col });
  }
  render() {
    	return (
            <div>
        	    <Gallery
              photos={PHOTO_SET}
              onClickPhoto={this.openLightbox}
              cols={this.state.col}
              margin={2}/>
              <Lightbox
                theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
                images={PHOTO_SET}
                backdropClosesModal={true}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                width={1600}
              />
            </div>
    	     );
        }
    }
    const PHOTO_SET = [
      {
        src: require('../../img/mainland-tanzania/0.jpg'),
        width: 1280,
        height: 800,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/1.jpg'),
        width: 672,
        height: 372,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/2.jpg'),
        width: 672,
        height: 372,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/3.jpg'),
        width: 768,
        height: 572,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/4.jpg'),
        width: 2480,
        height: 1665,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/5.jpg'),
        width: 1038,
        height: 576,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/6.jpg'),
        width: 2480,
        height: 1668,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/7.jpg'),
        width: 672,
        height: 372,
        alt: 'image',
      },
      {
        src: require('../../img/mainland-tanzania/8.jpg'),
        width: 672,
        height: 372,
        alt: 'image',
      },

];
