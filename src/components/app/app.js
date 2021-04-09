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

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <SwapiServiceProvider value={this.swapiService}>
          <Header/>

          <RandomPlanet/>

          <PersonPage/>
          <PlanetPage/>
          <StarshipPage/>

        </SwapiServiceProvider>
      </div>
    )
  }
}
