import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import JambianiVillage from './day-tours/cultural-day-tours/JambianiVillage';
import KidichiVillage from './day-tours/cultural-day-tours/KidichiVillage';
import NungwiVillage from './day-tours/cultural-day-tours/NungwiVillage';
import SpiceTour from './day-tours/cultural-day-tours/SpiceTour';

import ChumbeIsland from './day-tours/boat-tours/ChumbeIsland';
import DolphinTour from './day-tours/boat-tours/DolphinTour';
import PrisonIsland from './day-tours/boat-tours/PrisonIsland';
import SafariBlue from './day-tours/boat-tours/SafariBlue';
import SandbankPicnic from './day-tours/boat-tours/SandbankPicnic';
import SunsetDhowCruise from './day-tours/boat-tours/SunsetDhowCruise';
import UngujaUkuuBoatTrip from './day-tours/boat-tours/UngujaUkuuBoatTrip';

import DeepSeaFishing from './day-tours/fishing-tours/DeepSeaFishing';
import LocalGameFishing from './day-tours/fishing-tours/LocalGameFishing';

import CityTour from './day-tours/other-tours/CityTour';
import JozaniForestTour from './day-tours/other-tours/JozaniForestTour';

class DayToursHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.tour) {
      case 'jambiani-village':
        page = <JambianiVillage/>;
        break;
      case 'kidichi-village':
        page = <KidichiVillage/>;
        break;
      case 'nungwi-village':
        page = <NungwiVillage/>;
        break;
      case 'spice-tour':
        page = <SpiceTour/>;
        break;
      case 'chumbe-island':
        page = <ChumbeIsland/>;
        break;
      case 'dolphin-tour':
        page = <DolphinTour/>;
        break;
      case 'prison-island':
        page = <PrisonIsland/>;
        break;
      case 'safari-blue':
        page = <SafariBlue/>;
        break;
      case 'sandbank-picnic':
        page = <SandbankPicnic/>;
        break;
      case 'sunset-dhow-cruise':
        page = <SunsetDhowCruise/>;
        break;
      case 'unguja-ukuu-boat-trip':
        page = <UngujaUkuuBoatTrip/>;
        break;
      case 'deep-sea-fishing':
        page = <DeepSeaFishing/>;
        break;
      case 'local-game-fishing':
        page = <LocalGameFishing/>;
        break;
      case 'city-tour':
        page = <CityTour/>;
        break;
      case 'jozani-forest-tour':
        page = <JozaniForestTour/>;
        break;
    }
    return (
      <PageLayout>
       {page}
      </PageLayout>
    );
  }
}

export default DayToursHandler;
