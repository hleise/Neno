import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import DayTours from './pages/DayTours.js';
import DayToursHandler from './pages/DayToursHandler.js';
import NotFound from './pages/NotFound.js';
import Booking from './pages/Booking.js';
import CarRental from './pages/CarRental.js';
import FlightInfo from './pages/FlightInfo.js';
import history from './pages/History.js';
import Hotels from './pages/Hotels.js';
import PackageTours from './pages/PackageTours.js';
import Safaris from './pages/Safaris.js';

import Layout from './layout/Layout.js';
import JambianiVillage from './pages/day-tours/cultural-day/JambianiVillage';
import KidichiVillage from './pages/day-tours/cultural-day/KidichiVillage';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/booking' component={Booking}/>
              <Route exact path='/day-tours' component={DayTours}/>
              <Route path='/day-tours/:tour' component={DayToursHandler}/>
              <Route exact path='/package-tours' component={PackageTours}/>
              <Route exact path='/safaris' component={Safaris}/>
              <Route exact path='/car-rental' component={CarRental}/>
              <Route exact path='/flight-info' component={FlightInfo}/>
              <Route exact path='/history-of-zanzibar' component={history}/>
              <Route exact path='/hotels' component={Hotels}/>
              
              <Route path='*' component={Home}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
