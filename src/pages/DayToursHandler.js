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
        return page;
      case 'kidichi-village':
        page = <KidichiVillage/>;
        return page;
      case 'nungwi-village':
        page = <NungwiVillage/>;
        return page;
      case 'spice-tour':
        page = <SpiceTour/>;
        return page;
      case 'chumbe-island':
        page = <ChumbeIsland/>;
        return page;
      case 'dolphin-tour':
        page = <DolphinTour/>;
        return page;
      case 'prison-island':
        page = <PrisonIsland/>;
        return page;
      case 'safari-blue':
        page = <SafariBlue/>;
        return page;
      case 'sandbank-picnic':
        page = <SandbankPicnic/>;
        return page;
      case 'sunset-dhow-cruise':
        page = <SunsetDhowCruise/>;
        return page;
      case 'unguja-ukuu-boat-trip':
        page = <UngujaUkuuBoatTrip/>;
        return page;
      case 'deep-sea-fishing':
        page = <DeepSeaFishing/>;
        return page;
      case 'local-game-fishing':
        page = <LocalGameFishing/>;
        return page;
      case 'city-tour':
        page = <CityTour/>;
        return page;
      case 'jozani-forest-tour':
        page = <JozaniForestTour/>;
        return page;
    }
    return (
      <PageLayout>
       {page}
      </PageLayout>
    );
  }
}

export default DayToursHandler;
