import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';


const PersonDetails = (props) => {
    return (
      <ItemDetails {...props}
      >
        <Record label='Eye Color' field='eyeColor'/>
        <Record label='Birth Year' field='birthYear'/>
        <Record label='Gender' field='gender'/>
      </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getImage: swapiService.getPersonImage,
    getItem: swapiService.getPerson,
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);