import React, { Component } from 'react';
import Hotels from './Hotels';
import HotelsData from '../data/Hotels.json';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

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
    var page;
    switch(this.props.match.params.hotel) {
      case 'la-gemma-dell-est':
        page = <LaGemmaDellEst/>;
        break;
      case 'azanzi':
        page = <Azanzi/>;
        break;
      case 'baraza-beach':
        page = <BarazaBeach/>;
        break;
      case 'bluebay-beach':
        page = <BluebayBeach/>;
        break;
      case 'breezes-beach-club-and-spa':
        page = <BreezesBeachClub/>;
        break;
      case 'diamond-dreams':
        page = <DiamondDreams/>;
        break;
      case 'fumba-beach-lodge':
        page = <FumbaBeach/>;
        break;
      case 'ocean-paradise':
        page = <OceanParadise/>;
        break;
      case 'sandies-neptune-pwani-beach-resort':
        page = <SandiesNeptune/>;
        break;
      case 'zanzibar-retreat-hotel':
        page = <ZanzibarRetreat/>;
        break;
      case 'anna-of-zannibar':
        page = <Anna/>;
        break;
      case 'echo-beach':
        page = <EchoBeach/>;
        break;
      case 'flame-tree-cottages':
        page = <FlameTree/>;
      case 'karamba-resort':
        page = <KarambaResort/>;
        break;
      case 'matemwe-beach':
        page = <MatemweBeach/>;
        break;
      case 'matemwe-bungalows':
        page = <MatemweBungalows/>;
        break;
      case 'matemwe-retreat':
        page = <MatemweRetreat/>;
        break;
      case 'pongwe-cottages':
        page = <PongweCottages/>;
        break;
      case 'ras-nungwi':
        page = <RasNungwi/>;
        break;
      case 'shooting-star-hotel':
        page = <ShootingStar/>;
        break;
      case 'unguja-lodge':
        page = <UngujaLodge/>;
        break;
      case 'z-hotel':
        page = <ZHotel/>;
        break;
      case 'africa-house':
        page = <AfricaHouse/>;
        break;
      case 'dhow-palace-hotel':
        page = <DhowPalace/>;
        break;
      case 'grand-palace-hotel':
        page = <GrandPalaceHotel/>;
        break;
      case '236-huruzumi-hotel':
        page = <Huruzumi/>;
        break;
      case 'swahili-house':
        page = <SwahiliHouse/>;
        break;
      case 'tembo-house-hotel':
        page = <TemboHouse/>;
        break;
      case 'zanzibar-palace-hotel':
        page = <ZanzibarPalaceHotel/>;
        break;
      case 'zenji-hotel':
        page = <ZenjiHotel/>;
        break;
    }
    return (
      <PageLayout>
        {page}
      </PageLayout>
    )

  }
}

export default HotelHandler;
