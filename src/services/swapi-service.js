export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _apiImage = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}.
        Received: ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const obj = await this.getResource(`/people/`);
    return obj.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person);
  }

  getAllPlanet = async () => {
    const obj = await this.getResource(`/planets/`);
    return obj.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(res);
  }

  getAllStarships = async () => {
    const obj = await this.getResource(`/starships/`);
    return obj.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  getPersonImage = (id) => {
    return `${this._apiImage}/characters/${id}.jpg`;
  }

  getPlanetImage = (id) => {
    return `${this._apiImage}/planets/${id}.jpg`;
  }

  getStarshipImage = (id) => {
    return `${this._apiImage}/starships/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      gender: person.gender
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      consumables: starship.consumables,
      hyperdriveRating: starship.hyperdrive_rating,
      length: starship.length,
      model: starship.model
    };
  }

}

const res = new SwapiService();
res.getStarship(9);