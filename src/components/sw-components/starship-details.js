import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';


const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}
    >
      <Record label='Model' field='model'/>
      <Record label='Length' field='length'/>
      <Record label='Consumables' field='consumables'/>
      <Record label='Hyperdrive Rating' field='hyperdriveRating'/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getImage: swapiService.getStarshipImage,
    getItem: swapiService.getStarship,
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);