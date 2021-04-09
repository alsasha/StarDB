import React from 'react';

import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {
  const { onItemClick, children, list } = props;

  const elements = list.map(item => {
    const { id } = item;
    const listItem = children(item);
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        onClick={() => onItemClick(id)}
        key={id}
      >
        { listItem }
      </li>
    )
  })

  return (
    <ul className="list-group item-list">
      { elements }
    </ul>
  )
}

ItemList.defaultProps = {
  onItemClick: () => {},
}

ItemList.propTypes = {
  updateInterval: PropTypes.func
};

export default ItemList;