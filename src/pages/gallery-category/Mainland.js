import React from 'react';
import Gallery from 'react-photo-gallery';
import PageLayout from '../../layout/PageLayout';
import Lightbox from 'react-images';

export default class Sample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: 0,
      col: 3,
      lightboxIsOpen: false
    }
    this.openLightbox = this.openLightbox.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this);
  	this.openLightbox = this.openLightbox.bind(this);
  	this.gotoNext = this.gotoNext.bind(this);
  	this.gotoPrevious = this.gotoPrevious.bind(this);
    window.addEventListener('resize', this.getWidth)
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
          lightboxIsOpen: false,
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
  getWidth() {
    let col = Math.floor(document.documentElement.clientWidth / 250)
    this.setState({ col })
  }
  render() {
    	return (
            <div>
        	    <Gallery
              photos={PHOTO_SET}
              onClickPhoto={this.openLightbox}
              cols={this.state.col}
              margin={10}/>
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
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/1.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/2.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/3.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/4.jpg'),
        width: 1200,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/5.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/6.jpg'),
        width: 600,
        height: 300,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/7.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },
      {
        src: require('../../img/mainland-tanzania/8.jpg'),
        width: 600,
        height: 600,
        alt: 'image 1',
      },

];
