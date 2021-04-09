import ItemList from '../item-list';
import {
  withData,
  withSwapiService,
  compose,
  withChildrenFunction,
 } from '../hoc-helper';
import React from 'react';

const renderPlanet = (item) => (
  <React.Fragment>
    <span>{item.name}</span>
    <span>{item.diameter}</span>
  </React.Fragment>
);

const renderStarship = (item) => (
  <React.Fragment>
    <span>{item.name}</span>
    <span>{item.model}</span>
  </React.Fragment>
);

const renderPerson = (item) => (
  <React.Fragment>
    <span>{item.name}</span>
    <span>{item.gender} | {item.birthYear}</span>
  </React.Fragment>
);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getList: swapiService.getAllPeople,
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getList: swapiService.getAllPlanet,
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getList: swapiService.getAllStarships,
  }
}

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildrenFunction(renderPerson)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildrenFunction(renderPlanet)
                  )(ItemList);

const StarshipList = compose(
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    withChildrenFunction(renderStarship)
                  )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};