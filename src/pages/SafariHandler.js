import React, { Component } from 'react';
import Safaris from './Safaris';
import SafarisData from '../data/Safaris.json';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import Arusha from './safaris/northern/Arusha';
import Ngorongo from './safaris/northern/Ngorongo';
import Serengeti from './safaris/northern/Serengeti';
import Manyara from './safaris/northern/Manyara';
import Tarangire from './safaris/northern/Tarangire';

import Mikumi from './safaris/southern/Mikumi';
import Ruaha from './safaris/southern/Ruaha';
import Selous from './safaris/southern/Selous';

import Katavi from './safaris/western/Katavi';
import Mahale from './safaris/western/Mahale';

import Mafia from './safaris/coast/Mafia';
import Pemba from './safaris/coast/Pemba';
import Ras from './safaris/coast/Ras';


class SafariHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.safari) {
      case 'arusha-national-park':
        page = <Arusha/>;
        return page;
      case 'ngorongo-conservation-area':
        page = <Ngorongo/>;
        return page;
      case 'serengeti-national-park':
        page = <Serengeti/>;
        return page;
      case 'lake-manyara-national-park':
        page = <Manyara/>;
        return page;
      case 'tarangire-national-park':
        page = <Tarangire/>;
        return page;
      case 'selous-game-refuge':
        page = <Selous/>;
        return page;
      case 'ruaha-national-park':
        page = <Ruaha/>;
        return page;
      case 'mikumi-and-udzungwa-national-parks':
        page = <Mikumi/>;
        return page;
      case 'katavi-national-park':
        page = <Katavi/>;
        return page;
      case 'mahale-mountains-national-park':
        page = <Mahale/>;
        return page;
      case 'mafia-archipelago':
        page = <Mafia/>;
        return page;
      case 'pemba-island':
        page = <Pemba/>;
        return page;
      case 'ras-kutani-area':
        page = <Ras/>;
        return page;
    }
    return (
      <PageLayout>
        {page}
      </PageLayout>
    )
  }
}

export default SafariHandler;
