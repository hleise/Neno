import React, { Component } from 'react';
import Packages from './Packages';
import PackageData from '../data/Packages.json';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import Karibu from './packages/northern-packages/Karibu';
import Hakuna from './packages/northern-packages/Hakuna';

import Jambo from './packages/southern-packages/Jambo';
import SpicePackage from './packages/southern-packages/Spice';
import Short from './packages/southern-packages/Short';

class PackageHandler extends Component {
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

export default PackageHandler;
