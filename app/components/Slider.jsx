import React from 'react';

class Slider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedIndex: 1
      }
    }
    componentWillReceiveProps(newProps) {
      this.setState({
        selectedIndex: newProps.selectedIndex
      })
    }
    render() {
      var images = [];
      for (var i = 1; i < 6; i++) {
          if(this.state.selectedIndex == i) {
            images.push(
                    <img className={'SliderImage SelectedImage'} src={require('./img/' + i + '.jpg')} key={i} alt={i}/>
                  );
          } else {
            images.push(
                    <img className={'SliderImage'} src={require('./img/' + i + '.jpg')} key={i} alt={i}/>
                  );
          }

      }
      return (
        <div className={'Slider'}>
          <div>
            {images}
          </div>
          <div className={'SliderButtons'}>
            {images.map((image, i) => <div className={'OuterCircle'} key={i}><div></div></div>)}
          </div>
        </div>
      );
    }
};

export default Slider;
