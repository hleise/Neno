import React, {Component} from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import BookingButton from "../components/BookingButton";
import Banner from './Banner'

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Banner
          title={this.props.title}
          page={this.props.page}
          i={this.props.i}
          downArrow={true}
        />
        <div className="info" id="info">
          <HorizontalTextSection>
            <div className='markdown' dangerouslySetInnerHTML={{__html: this.props.markdown}}>
            </div>
            <BookingButton/>
          </HorizontalTextSection>
        </div>
      </div>
    );
  }
}

export default Page;
