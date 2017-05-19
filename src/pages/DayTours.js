import React, { Component } from 'react';
import ToursLayout from '../layout/ToursLayout';
import DayToursHome from './DayToursHome';
import DayToursData from '../data/DayTours.json';
import { Route, Switch } from 'react-router-dom';

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



class DayTours extends Component {
  render() {
    console.log(this.props.match.path + "/cultural-day/jambiani-village");
    switch(this.props.match.params.tour) {
      case 'jambiani-village':
        return (<JambianiVillage/>);
      case 'kidichi-village':
        return (<KidichiVillage/>);
      case 'nungwi-village':
        return (<KidichiVillage/>);
      case 'spice-tour':
        return (<KidichiVillage/>);
      case 'chumbe-island':
        return (<KidichiVillage/>);
      case 'dolphin-tour':
        return (<DolphinTour/>);
      case 'prison-island':
        return (<PrisonIsland/>);
      case 'safari-blue':
        return (<SafariBlue/>);
      case 'sandbank-picnic':
        return (<SandbankPicnic/>);
      case 'sunset-dhow-cruise':
        return (<SunsetDhowCruise/>);
      case 'unguja-ukuu-boat-trip':
        return (<UngujaUkuuBoatTrip/>);
      case 'deep-sea-fishing':
        return (<DeepSeaFishing/>);
      case 'local-game-fishing':
        return (<DeepSeaFishing/>);
      case 'city-tour':
        return (<CityTour/>);
      case 'jozani-forest-tour':
        return (<JozaniForestTour/>);
    }

  }
}

export default DayTours;
