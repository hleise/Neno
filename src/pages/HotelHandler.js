import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import Azanzi from './hotels/beach-resorts/Azanzi'
import BarazaBeach from './hotels/beach-resorts/BarazaBeach'
import BluebayBeach from './hotels/beach-resorts/BluebayBeach'
import BreezesBeachClub from './hotels/beach-resorts/BreezesBeachClub'
import DiamondDreams from './hotels/beach-resorts/DiamondDreams'
import FumbaBeach from './hotels/beach-resorts/FumbaBeach'
import LaGemmaDellEst from './hotels/beach-resorts/LaGemmaDellEst'
import OceanParadise from './hotels/beach-resorts/OceanParadise'
import SandiesNeptune from './hotels/beach-resorts/SandiesNeptune'
import ZanzibarRetreat from './hotels/beach-resorts/ZanzibarRetreat'

import Anna from './hotels/beach-clubs/Anna'
import EchoBeach from './hotels/beach-clubs/EchoBeach'
import FlameTree from './hotels/beach-clubs/FlameTree'
import KarambaResort from './hotels/beach-clubs/KarambaResort'
import KichangaLodge from './hotels/beach-clubs/KichangaLodge'
import MatemweBeach from './hotels/beach-clubs/MatemweBeach'
import MatemweBungalows from './hotels/beach-clubs/MatemweBungalows'
import MatemweRetreat from './hotels/beach-clubs/MatemweRetreat'
import PongweCottages from './hotels/beach-clubs/PongweCottages'
import RasNungwi from './hotels/beach-clubs/RasNungwi'
import ShootingStar from './hotels/beach-clubs/ShootingStar'
import UngujaLodge from './hotels/beach-clubs/UngujaLodge'
import ZHotel from './hotels/beach-clubs/ZHotel'


import Huruzumi from './hotels/city-hotels/Huruzumi';
import AfricaHouse from './hotels/city-hotels/AfricaHouse';
import DhowPalace from './hotels/city-hotels/DhowPalace';
import GrandPalaceHotel from './hotels/city-hotels/GrandPalaceHotel';
import SwahiliHouse from './hotels/city-hotels/SwahiliHouse';
import TemboHouse from './hotels/city-hotels/TemboHouse';
import ZanzibarPalaceHotel from './hotels/city-hotels/ZanzibarPalaceHotel';
import ZenjiHotel from './hotels/city-hotels/ZenjiHotel';

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
