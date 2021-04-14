import React from 'react';
import Row from '../row';
import {
  PersonList,
  PersonDetails
} from '../sw-components';
import { withRouter } from 'react-router-dom';

const PersonPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={
        <PersonList
          onItemClick={(id) => history.push(id)
        }/>
      }
      right={
        <PersonDetails
          itemId={id}
        />
      }
    />
  );
}

export default withRouter(PersonPage);