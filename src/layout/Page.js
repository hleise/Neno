import React, {Component} from 'react';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import BookingButton from "../components/BookingButton";
import Banner from './Banner'

class Page extends Component {
  render() {
    const title = this.props.match.params.experience.replace(/-/g, ' ').replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase()})
    const markdown = this.props.match.params.experience.replace(/-/g, ' ').replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase()}).replace(/\s/g, '')

    return (
      <div className="page">
      <Banner
        title={title}
        folder={this.props.match.params.folder}
        i={0}
        downArrow={true}
      />
      <div className="info" id="info">
        <HorizontalTextSection>
          <div className='markdown' dangerouslySetInnerHTML={{__html: require(`../content/${this.props.match.params.folder}/${this.props.match.params.subfolder}/${markdown}.md`)}} />
          <BookingButton/>
        </HorizontalTextSection>
      </div>
      </div>
    );
  }
}






export default Page;
