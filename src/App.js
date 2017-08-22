import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Handler from './pages/Handler'

import DayToursHandler from './pages/DayToursHandler'
import Booking from './pages/Booking'
import CarRental from './pages/CarRental'
import FlightInfo from './pages/FlightInfo'
import history from './pages/History'
import General from './pages/GeneralInfo'
import Volunteers from './pages/Volunteers'
import Gallery from './pages/Gallery'
import GalleryHandler from './pages/GalleryHandler'
import HotelHandler from './pages/HotelHandler'
import packagesHandler from './pages/PackageHandler'
import SafariHandler from './pages/SafariHandler'
import Transportation from './pages/Transportation'
import Featured from './pages/gallery-category/Featured'
import Adventure from './pages/gallery-category/Adventure'
import Culture from './pages/gallery-category/Culture'
import Island from './pages/gallery-category/Island'
import Mainland from './pages/gallery-category/Mainland'
import VolunteerOps from './pages/gallery-category/VolunteerOps'
import Layout from './layout/Layout'
import SimplyBooking from './SimplyBooking'
import createHistory from 'history/createBrowserHistory'
import Data from './data/data.json'

class App extends Component {
  render() {
    var data = Data[0]
    const history = createHistory()
    history.listen((location, action) => {
    })
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/day-tours' component={(props) => <Handler page='day-tours' data={data.tours} />}/>
              <Route exact path='/packages' component={(props) => <Handler page='packages' data={data.packages} />}/>
              <Route exact path='/safaris' component={(props) => <Handler page='safaris' data={data.safaris} />}/>
              <Route exact path='/hotels' component={(props) => <Handler page='hotels' data={data.hotels} />}/>

              <Route exact path='/simply-booking' component={SimplyBooking}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/transportation' component={Transportation}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/booking' component={Booking}/>
              <Route path='/day-tours/:tour' component={DayToursHandler}/>
              <Route path='/packages/:tour' component={packagesHandler}/>
              <Route path='/safaris/:safari' component={SafariHandler}/>
              <Route exact path='/car-rental' component={CarRental}/>
              <Route exact path='/flight-info' component={FlightInfo}/>
              <Route exact path='/history-of-zanzibar' component={history}/>
              <Route exact path='/general-information' component={General}/>
              <Route exact path='/volunteers' component={Volunteers}/>
              <Route exact path='/gallery' component={Gallery}/>
              <Route path='/gallery-category/:category' component={GalleryHandler}/>

              <Route path='/hotels/:hotel' component={HotelHandler}/>
              <Route exact path='/gallery-category/featured' component={Featured}/>
              <Route exact path='/gallery-category/adventure' component={Adventure}/>
              <Route exact path='/gallery-category/culture' component={Culture}/>
              <Route exact path='/gallery-category/zanzibar-island' component={Island}/>
              <Route exact path='/gallery-category/mainland-tanzania' component={Mainland}/>
              <Route exact path='/gallery-category/volunteer-opportunities' component={VolunteerOps}/>
              <Route path='*' component={Home}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
