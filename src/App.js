import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DayTours from './pages/DayTours';
import DayToursHandler from './pages/DayToursHandler';
import NotFound from './pages/NotFound';
import Booking from './pages/Booking';
import CarRental from './pages/CarRental';
import FlightInfo from './pages/FlightInfo';
import history from './pages/History';
import General from './pages/GeneralInfo';
import Volunteers from './pages/Volunteers';
import Gallery from './pages/Gallery';
import GalleryHandler from './pages/GalleryHandler';
import Hotels from './pages/Hotels';
import HotelHandler from './pages/HotelHandler';
import PackageTours from './pages/PackageTours';
import PackageToursHandler from './pages/PackageToursHandler';
import Safaris from './pages/Safaris';
import SafariHandler from './pages/SafariHandler';
import Transportation from './pages/Transportation';
import Featured from './pages/gallery-category/Featured';
import Layout from './layout/Layout';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/transportation' component={Transportation}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/booking' component={Booking}/>
              <Route exact path='/day-tours' component={DayTours}/>
              <Route path='/day-tours/:tour' component={DayToursHandler}/>
              <Route exact path='/package-tours' component={PackageTours}/>
              <Route path='/package-tours/:tour' component={PackageToursHandler}/>
              <Route exact path='/safaris' component={Safaris}/>
              <Route path='/safaris/:safari' component={SafariHandler}/>
              <Route exact path='/car-rental' component={CarRental}/>
              <Route exact path='/flight-info' component={FlightInfo}/>
              <Route exact path='/history-of-zanzibar' component={history}/>
              <Route exact path='/general-information' component={General}/>
              <Route exact path='/volunteers' component={Volunteers}/>
              <Route exact path='/gallery' component={Gallery}/>
              <Route path='/gallery-category/:category' component={GalleryHandler}/>
              <Route exact path='/hotels' component={Hotels}/>
              <Route path='/hotels/:hotel' component={HotelHandler}/>
              <Route exact path='/gallery-category/featured' component={Featured}/>
              <Route path='*' component={Home}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
