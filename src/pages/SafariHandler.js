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

import Threeday from './safaris/threetoseven/3day';
import Fourday from './safaris/threetoseven/4day';
import Fiveday from './safaris/threetoseven/5day';
import Sevenday from './safaris/threetoseven/7day';
import Daysinfo from './safaris/threetoseven/daysinfo';


class SafariHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.safari) {
      case 'arusha-national-park':
        page = <Arusha/>;
        break;
      case 'ngorongo-conservation-area':
        page = <Ngorongo/>;
        break;
      case 'serengeti-national-park':
        page = <Serengeti/>;
        break;
      case 'lake-manyara-national-park':
        page = <Manyara/>;
        break;
      case 'tarangire-national-park':
        page = <Tarangire/>;
        break;
      case 'selous-game-refuge':
        page = <Selous/>;
        break;
      case 'ruaha-national-park':
        page = <Ruaha/>;
        break;
      case 'mikumi-and-udzungwa-national-parks':
        page = <Mikumi/>;
        break;
      case 'katavi-national-park':
        page = <Katavi/>;
        break;
      case 'mahale-mountains-national-park':
        page = <Mahale/>;
        break;
      case 'mafia-archipelago':
        page = <Mafia/>;
        break;
      case 'pemba-island':
        page = <Pemba/>;
        break;
      case 'ras-kutani-area':
        page = <Ras/>;
        break;
      case '3-days':
        page = <Threeday/>;
        break;
      case '4-days':
        page = <Fourday/>;
        break;
      case '5-days':
        page = <Fiveday/>;
        break;
      case '7-days':
        page = <Sevenday/>;
        break;
      case 'general-information':
        page = <Daysinfo/>;
        break;
    }
    return (
      <PageLayout>
        {page}
      </PageLayout>
    )
  }
}

export default SafariHandler;
