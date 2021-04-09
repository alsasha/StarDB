import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';
import PropTypes from 'prop-types';

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 5000,
  }

  static propTypes = {
    updateInterval: PropTypes.number
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  state = {
    planet: {},
    isLoading: true,
    isError: false,
  }

  service = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoading: false
    });
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.service.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, isLoading, isError } = this.state;

    const content = isLoading ? <Spinner/> :
     isError ? <ErrorIndicator/> : <PlanetView planet={planet}/>;

    return (
      <div className="random-planet">
        { content }
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  const imgSrc = id ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : 'https://avatanplus.com/files/resources/mid/5c0cbeef8285416791c9d7af.png';
  const alternativeSrc = 'https://avatanplus.com/files/resources/mid/5c0cbeef8285416791c9d7af.png';

  function onSrcError(e) {
    e.target.src = alternativeSrc;
  }

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={imgSrc}
        onError={(e) => onSrcError(e)}
        alt="planet"></img>
      <div>
        <h4>{name}</h4>
        <ul className="list-group ">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}