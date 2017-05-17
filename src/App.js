import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import DayTours from './pages/DayTours.js';
import NotFound from './pages/NotFound.js';
import Booking from './pages/Booking.js';
import CarHire from './pages/CarHire.js';
import FlightInfo from './pages/FlightInfo.js';
import history from './pages/History.js';
import Hotels from './pages/Hotels.js';
import PackageTours from './pages/PackageTours.js';
import Safaris from './pages/Safaris.js';
import Transportation from './pages/Transportation.js';
import NavBar from './components/NavBar.js';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <NavBar>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/day-tours' component={DayTours}/>
              <Route exact path='/booking' component={Booking}/>
              <Route exact path='/car-hire' component={CarHire}/>
              <Route exact path='/flight-info' component={FlightInfo}/>
              <Route exact path='/history-of-zanzibar' component={history}/>
              <Route exact path='/hotels' component={Hotels}/>
              <Route exact path='/package-tours' component={PackageTours}/>
              <Route exact path='/safaris' component={Safaris}/>
              <Route exact path='/transportation' component={Transportation}/>
              <Route component={NotFound}/>
            </Switch>
          </NavBar>
        </BrowserRouter>
    );
  }
}

export default App;
