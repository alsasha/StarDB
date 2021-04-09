import React, { Component } from 'react';
import Row from '../row';
import {
  PlanetList,
  PlanetDetails,
} from '../sw-components';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null
  }

  onItemClick = (id) => {
    this.setState({selectedItem: id});
  }

  render() {
    return (
      <Row
        left={<PlanetList onItemClick={this.onItemClick}/>}
        right={<PlanetDetails itemId={this.state.selectedItem}/>}
      />
    );
  }
}