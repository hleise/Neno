import React, { Component } from 'react';
import Hotels from './Hotels';
import HotelsData from '../data/Hotels.json';
import { Route, Switch } from 'react-router-dom';

import Azanzi from './hotels/resorts/Azanzi';
import BarazaBeach from './hotels/resorts/BarazaBeach';
import BluebayBeach from './hotels/resorts/BluebayBeach';
import BreezesBeachClub from './hotels/resorts/BreezesBeachClub';
import DiamondDreams from './hotels/resorts/DiamondDreams';
import FumbaBeach from './hotels/resorts/FumbaBeach';
import LaGemmaDellEst from './hotels/resorts/LaGemmaDellEst';
import OceanParadise from './hotels/resorts/OceanParadise';
import SandiesNeptune from './hotels/resorts/SandiesNeptune';
import ZanzibarRetreat from './hotels/resorts/ZanzibarRetreat';

import Anna from './hotels/clubs/Anna';
import EchoBeach from './hotels/clubs/EchoBeach';
import FlameTree from './hotels/clubs/FlameTree';
import KarambaResort from './hotels/clubs/KarambaResort';
import KichangaLodge from './hotels/clubs/KichangaLodge';
import MatemweBeach from './hotels/clubs/MatemweBeach';
import MatemweBungalows from './hotels/clubs/MatemweBungalows';
import MatemweRetreat from './hotels/clubs/MatemweRetreat';
import PongweCottages from './hotels/clubs/PongweCottages';
import RasNungwi from './hotels/clubs/RasNungwi';
import ShootingStar from './hotels/clubs/ShootingStar';
import UngujaLodge from './hotels/clubs/UngujaLodge';
import ZHotel from './hotels/clubs/ZHotel';


import Huruzumi from './hotels/city/Huruzumi';
import AfricaHouse from './hotels/city/AfricaHouse';
import DhowPalace from './hotels/city/DhowPalace';
import GrandPalaceHotel from './hotels/city/GrandPalaceHotel';
import SwahiliHouse from './hotels/city/SwahiliHouse';
import TemboHouse from './hotels/city/TemboHouse';
import ZanzibarPalaceHotel from './hotels/city/ZanzibarPalaceHotel';
import ZenjiHotel from './hotels/city/ZenjiHotel';

class HotelHandler extends Component {
  render() {
    switch(this.props.match.params.tour) {
      case 'la-gemma-dell-est':
        return (<LaGemmaDellEst/>);
      case 'azanzi':
        return (<Azanzi/>);
      case 'baraza-beach':
        return (<BarazaBeach/>);
      case 'bluebay-beach':
        return (<BluebayBeach/>);
      case 'breezes-beach-club-and-spa':
        return (<BreezesBeachClub/>);
      case 'diamond-dreams':
        return (<DiamondDreams/>);
      case 'fumba-beach-lodge':
        return (<FumbaBeach/>);
      case 'ocean-paradise':
        return (<OceanParadise/>);
      case 'sandies-neptune-pwani-beach-resort':
        return (<SandiesNeptune/>);
      case 'zanzibar-retreat-hotel':
        return (<ZanzibarRetreat/>);
      case 'anna-of-zannibar':
        return (<Anna/>);
      case 'echo-beach':
        return (<EchoBeach/>);
      case 'flame-tree-cottages':
        return (<FlameTree/>);
      case 'karamba-resort':
        return (<KarambaResort/>);
      case 'matemwe-beach':
        return (<MatemweBeach/>);
      case 'matemwe-bungalows':
        return (<MatemweBungalows/>);
      case 'matemwe-retreat':
        return (<MatemweRetreat/>);
      case 'pongwe-cottages':
        return (<PongweCottages/>);
      case 'ras-nungwi':
        return (<RasNungwi/>);
      case 'shooting-star-hotel':
        return (<ShootingStar/>);
      case 'unguja-lodge':
        return (<UngujaLodge/>);
      case 'z-hotel':
        return (<ZHotel/>);
      case 'africa-house':
        return (<AfricaHouse/>);
      case 'dhow-palace-hotel':
        return (<DhowPalace/>);
      case 'grand-palace-hotel':
        return (<GrandPalaceHotel/>);
      case '236-huruzumi-hotel':
        return (<Huruzumi/>);
      case 'swahili-house':
        return (<SwahiliHouse/>);
      case 'tembo-house-hotel':
        return (<TemboHouse/>);
      case 'zanzibar-palace-hotel':
        return (<ZanzibarPalaceHotel/>);
      case 'zenji-hotel':
        return (<ZenjiHotel/>);
    }

  }
}

export default HotelHandler;
