import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
