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
        return page;
      case 'azanzi':
        page = <Azanzi/>;
        return page;
      case 'baraza-beach':
        page = <BarazaBeach/>;
        return page;
      case 'bluebay-beach':
        page = <BluebayBeach/>;
        return page;
      case 'breezes-beach-club-and-spa':
        page = <BreezesBeachClub/>;
        return page;
      case 'diamond-dreams':
        page = <DiamondDreams/>;
        return page;
      case 'fumba-beach-lodge':
        page = <FumbaBeach/>;
        return page;
      case 'ocean-paradise':
        page = <OceanParadise/>;
        return page;
      case 'sandies-neptune-pwani-beach-resort':
        page = <SandiesNeptune/>;
        return page;
      case 'zanzibar-retreat-hotel':
        page = <ZanzibarRetreat/>;
        return page;
      case 'anna-of-zannibar':
        page = <Anna/>;
        return page;
      case 'echo-beach':
        page = <EchoBeach/>;
        return page;
      case 'flame-tree-cottages':
        page = <FlameTree/>;
        return page;
      case 'karamba-resort':
        page = <KarambaResort/>;
        return page;
      case 'matemwe-beach':
        page = <MatemweBeach/>;
        return page;
      case 'matemwe-bungalows':
        page = <MatemweBungalows/>;
        return page;
      case 'matemwe-retreat':
        page = <MatemweRetreat/>;
        return page;
      case 'pongwe-cottages':
        page = <PongweCottages/>;
        return page;
      case 'ras-nungwi':
        page = <RasNungwi/>;
        return page;
      case 'shooting-star-hotel':
        page = <ShootingStar/>;
        return page;
      case 'unguja-lodge':
        page = <UngujaLodge/>;
        return page;
      case 'z-hotel':
        page = <ZHotel/>;
        return page;
      case 'africa-house':
        page = <AfricaHouse/>;
        return page;
      case 'dhow-palace-hotel':
        page = <DhowPalace/>;
        return page;
      case 'grand-palace-hotel':
        page = <GrandPalaceHotel/>;
        return page;
      case '236-huruzumi-hotel':
        page = <Huruzumi/>;
        return page;
      case 'swahili-house':
        page = <SwahiliHouse/>;
        return page;
      case 'tembo-house-hotel':
        page = <TemboHouse/>;
        return page;
      case 'zanzibar-palace-hotel':
        page = <ZanzibarPalaceHotel/>;
        return page;
      case 'zenji-hotel':
        page = <ZenjiHotel/>;
        return page;
    }
    return (
      <PageLayout>
        {page}
      </PageLayout>
    )

  }
}

export default HotelHandler;
