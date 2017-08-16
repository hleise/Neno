import React, { Component } from 'react';
import Banner from '../layout/Banner';
import HorizontalTextSection from '../components/HorizontalTextSection.js';
import volunteersMarkdown from '../content/Volunteers.md';
import PageLayout from '../layout/PageLayout';

class Volunteers extends Component {
  render() {
    return (
      <PageLayout>
      <div className="page">
        <Banner
          title='Volunteers'
          page='volunteer'
          i='0'
        />
        <div className="info" id="info">
         <HorizontalTextSection>
           <div className='markdown' dangerouslySetInnerHTML={{__html: volunteersMarkdown}}></div>
         </HorizontalTextSection>
        </div>
      </div>
      </PageLayout>
    );
  }
}

export default Volunteers;
