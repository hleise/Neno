import React, { Component } from 'react';
import Safaris from './Safaris';
import SafarisData from '../data/Safaris.json';
import { Route, Switch } from 'react-router-dom';

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
    switch(this.props.match.params.safari) {
      case 'arusha-national-park':
        return (<Arusha/>);
      case 'ngorongo-conservation-area':
        return (<Ngorongo/>);
      case 'serengeti-national-park':
        return (<Serengeti/>);
      case 'lake-manyara-national-park':
        return (<Manyara/>);
      case 'tarangire-national-park':
        return (<Tarangire/>);
      case 'selous-game-refuge':
        return (<Selous/>);
      case 'ruaha-national-park':
        return (<Ruaha/>);
      case 'mikumi-and-udzungwa-national-parks':
        return (<Mikumi/>);
      case 'katavi-national-park':
        return (<Katavi/>);
      case 'mahale-mountains-national-park':
        return (<Mahale/>);
      case 'mafia-archipelago':
        return (<Mafia/>);
      case 'pemba-island':
        return (<Pemba/>);
      case 'ras-kutani-area':
        return (<Ras/>);
    }

  }
}

export default SafariHandler;
