import React, { Component } from 'react';
import PackageTours from './PackageTours';
import PackageToursData from '../data/PackageTours.json';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import Karibu from './package-tours/northern-package/Karibu';
import Hakuna from './package-tours/northern-package/Hakuna';

import Jambo from './package-tours/southern-package/Jambo';
import SpicePackage from './package-tours/southern-package/Spice';
import Short from './package-tours/southern-package/Short';

class PackageToursHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.tour) {
      case 'karibu-package':
        page = <Karibu/>;
        break;
      case 'hakuna-matata-package':
        page = <Hakuna/>;
        break;
      case 'jambo-package':
        page = <Jambo/>;
        break;
      case 'spice-package':
        page = <SpicePackage/>;
        break;
      case 'zanzibar-short-cultural-packages':
        page = <Short/>;
        break;
    }
    return (
      <PageLayout>
       {page}
      </PageLayout>
    );
  }
}

export default PackageToursHandler;
