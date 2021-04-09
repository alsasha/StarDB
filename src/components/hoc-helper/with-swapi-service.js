import React from 'react';
import {
  SwapiServiceConsumer
} from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const methods = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...methods}/>
            )
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export {
  withSwapiService
};