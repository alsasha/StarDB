import React, { Component } from 'react';
import Row from '../row';
import {
  StarshipList,
  StarshipDetails
} from '../sw-components';

export default class StarshipPage extends Component {
  state = {
    selectedItem: null
  }

  onItemClick = (id) => {
    this.setState({selectedItem: id});
  }

  render() {
    return (
      <Row
        left={<StarshipList onItemClick={this.onItemClick}/>}
        right={<StarshipDetails itemId={this.state.selectedItem}/>}
      />
    );
  }
}