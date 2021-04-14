import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import {
  SwapiServiceProvider
} from '../swapi-service-context';
import {
  PlanetPage,
  PersonPage,
  StarshipPage
} from '../pages';
import {
  StarshipDetails,
} from '../sw-components';

import './app.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <Header/>

            <RandomPlanet/>

            <Switch>
              <Route path="/"
                render={() => <div className="text-center"><h2>Welcome to StarDB</h2></div>}
                exact
              ></Route>
              <Route path="/people/:id?" component={PersonPage}></Route>
              <Route path="/planets" component={PlanetPage}></Route>
              <Route path="/starships" exact component={StarshipPage}></Route>

              <Route
                path="/starships/:id"
                render={({ match }) => {
                return <StarshipDetails itemId={match.params.id}/>
              }}
              ></Route>

              <Route
                render={() => <div className="text-center"><h2>Page is not found</h2></div>}

              />
            </Switch>

          </Router>
        </SwapiServiceProvider>
      </div>
    )
  }
}
