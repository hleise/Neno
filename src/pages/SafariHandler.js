import React, { Component } from 'react'
import SafarisData from '../data/Safaris.json'
import { Route, Switch } from 'react-router-dom'
import PageLayout from '../layout/PageLayout'

import Arusha from './safaris/northern-circuit-safaris/Arusha'
import Ngorongo from './safaris/northern-circuit-safaris/Ngorongo'
import Serengeti from './safaris/northern-circuit-safaris/Serengeti'
import Manyara from './safaris/northern-circuit-safaris/Manyara'
import Tarangire from './safaris/northern-circuit-safaris/Tarangire'

import Mikumi from './safaris/southern-circuit-safaris/Mikumi'
import Ruaha from './safaris/southern-circuit-safaris/Ruaha'
import Selous from './safaris/southern-circuit-safaris/Selous'

import Katavi from './safaris/western-circuit-safaris/Katavi'
import Mahale from './safaris/western-circuit-safaris/Mahale'

import Mafia from './safaris/coast/Mafia'
import Pemba from './safaris/coast/Pemba'
import Ras from './safaris/coast/Ras'
import Dar from './safaris/coast/Dar'

import Threeday from './safaris/three-to-seven-day-safaris/3day'
import Fourday from './safaris/three-to-seven-day-safaris/4day'
import Fiveday from './safaris/three-to-seven-day-safaris/5day'
import Sevenday from './safaris/three-to-seven-day-safaris/7day'
import Daysinfo from './safaris/three-to-seven-day-safaris/daysinfo'

import Hadza from './safaris/cultural/Hadza';
import Maasai from './safaris/cultural/Maasai';

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
      case 'dar-es-salaam':
        page = <Dar/>;
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
      case 'hadza':
        page = <Hadza/>;
        break;
      case 'maasai':
        page = <Maasai/>;
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
