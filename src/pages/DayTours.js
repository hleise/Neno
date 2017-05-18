import React, { Component } from 'react';
import ToursLayout from '../layout/Tours';
import DayToursData from '../data/DayTours.json';
import { Route } from 'react-router-dom';

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
    return (
      <div className="day-tours">
        <Route path={`${this.props.match.path}/chumbe-island`} component={ChumbeIsland}/>
        <Route path={`${this.props.match.path}/dolphin-tour`} component={DolphinTour}/>
        <Route path={`${this.props.match.path}/prison-island`} component={PrisonIsland}/>
        <Route path={`${this.props.match.path}/safari-blue`} component={SafariBlue}/>
        <Route path={`${this.props.match.path}/sandbank-picnic`} component={SandbankPicnic}/>
        <Route path={`${this.props.match.path}/sunset-dhow-cruise`} component={SunsetDhowCruise}/>
        <Route path={`${this.props.match.path}/unguja-ukuu-boat-trip`} component={UngujaUkuuBoatTrip}/>

        <Route path={`${this.props.match.path}/jambiani-village`} component={JambianiVillage}/>
        <Route path={`${this.props.match.path}/kidichi-village`} component={KidichiVillage}/>
        <Route path={`${this.props.match.path}/nungwi-village`} component={NungwiVillage}/>
        <Route path={`${this.props.match.path}/spice-tour`} component={SpiceTour}/>

        <Route path={`${this.props.match.path}/deep-sea-fishing`} component={DeepSeaFishing}/>
        <Route path={`${this.props.match.path}/local-game-fishing`} component={LocalGameFishing}/>

        <Route path={`${this.props.match.path}/city-tour`} component={CityTour}/>
        <Route path={`${this.props.match.path}/jozani-forest-tour`} component={JozaniForestTour}/>

        <Route>
          <ToursLayout page="day-tours" data={DayToursData}/>
        </Route>

      </div>
    );
  }
}

export default DayTours;
