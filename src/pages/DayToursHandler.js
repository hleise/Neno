import React, { Component } from 'react';
import DayTours from './DayTours';
import DayToursData from '../data/DayTours.json';
import { Route, Switch } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

import JambianiVillage from './day-tours/cultural-day/JambianiVillage';
import KidichiVillage from './day-tours/cultural-day/KidichiVillage';
import NungwiVillage from './day-tours/cultural-day/NungwiVillage';
import SpiceTour from './day-tours/cultural-day/SpiceTour';

import ChumbeIsland from './day-tours/boat/ChumbeIsland';
import DolphinTour from './day-tours/boat/DolphinTour';
import PrisonIsland from './day-tours/boat/PrisonIsland';
import SafariBlue from './day-tours/boat/SafariBlue';
import SandbankPicnic from './day-tours/boat/SandbankPicnic';
import SunsetDhowCruise from './day-tours/boat/SunsetDhowCruise';
import UngujaUkuuBoatTrip from './day-tours/boat/UngujaUkuuBoatTrip';

import DeepSeaFishing from './day-tours/fishing/DeepSeaFishing';
import LocalGameFishing from './day-tours/fishing/LocalGameFishing';

import CityTour from './day-tours/other/CityTour';
import JozaniForestTour from './day-tours/other/JozaniForestTour';



class DayToursHandler extends Component {
  render() {
    var page;
    switch(this.props.match.params.tour) {
      case 'jambiani-village':
        page = <JambianiVillage/>;
      case 'kidichi-village':
        page = <KidichiVillage/>;
      case 'nungwi-village':
        page = <NungwiVillage/>;
      case 'spice-tour':
        page = <SpiceTour/>;
      case 'chumbe-island':
        page = <ChumbeIsland/>;
      case 'dolphin-tour':
        page = <DolphinTour/>;
      case 'prison-island':
        page = <PrisonIsland/>;
      case 'safari-blue':
        page = <SafariBlue/>;
      case 'sandbank-picnic':
        page = <SandbankPicnic/>;
      case 'sunset-dhow-cruise':
        page = <SunsetDhowCruise/>;
      case 'unguja-ukuu-boat-trip':
        page = <UngujaUkuuBoatTrip/>;
      case 'deep-sea-fishing':
        page = <DeepSeaFishing/>;
      case 'local-game-fishing':
        page = <LocalGameFishing/>;
      case 'city-tour':
        page = <CityTour/>;
      case 'jozani-forest-tour':
        page = <JozaniForestTour/>;
    }
    return (
      <PageLayout>
       {page}
      </PageLayout>
    );
  }
}

export default DayToursHandler;
