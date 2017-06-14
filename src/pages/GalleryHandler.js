import React, { Component } from 'react';
/*import Gallery from './pages';*/
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import Featured from './gallery-category/Featured';
import Adventure from './gallery-category/Adventure';
import Mainland from './gallery-category/Mainland';
import Island from './gallery-category/Island';
import Culture from './gallery-category/Culture';
import VolunteerOps from './gallery-category/VolunteerOps';

class GalleryHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.category) {
      case 'featured':
        page = <Featured/>;
        break;
      case 'adventure':
        page = <Adventure/>;
        break;
      case 'mainland-tanzania':
        page = <Mainland/>;
        break;
      case 'zanzibar-island':
        page = <Island/>;
        break;
      case 'culture':
        page = <Culture/>;
        break;
      case 'volunteer-opportunities':
        page = <VolunteerOps/>;
        break;
    }
    return (
      <PageLayout>
       {page}
      </PageLayout>
    );
  }
}

export default GalleryHandler;
