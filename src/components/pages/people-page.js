import React, { Component } from 'react';
import Row from '../row';
import {
  PersonList,
  PersonDetails
} from '../sw-components';

export default class PersonPage extends Component {
  state = {
    selectedItem: null
  }

  onItemClick = (id) => {
    this.setState({selectedItem: id});
  }

  render() {
    return (
      <Row
        left={<PersonList onItemClick={this.onItemClick}/>}
        right={<PersonDetails itemId={this.state.selectedItem}/>}
      />
    );
  }
}