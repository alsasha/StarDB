import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helper';


const PlanetDetails = (props) => {
    return (
      <ItemDetails {...props}
      >
        <Record label='Population' field='population'/>
        <Record label='Rotation Period' field='rotationPeriod'/>
        <Record label='Diameter' field='diameter'/>
      </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getImage: swapiService.getPlanetImage,
    getItem: swapiService.getPlanet,
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);