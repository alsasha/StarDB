import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span>{ label } </span>
      <span>{ item[field] }</span>
    </li>
  )
}

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    isLoading: false,
    isError: false
  }

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    })
  }

  onGetItem = (item) => {
    const { getImage, itemId } = this.props;
    this.setState({
      item,
      image: getImage(itemId),
      isLoading: false
    })
  }

  componentDidMount() {
    if (this.props.itemId === null) {
      return
    }
    this.uploadItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({
        isLoading: true,
      })
      this.uploadItem();
    }
  }

  uploadItem() {
    this.setState({
      isLoading: true,
    })
    const { itemId, getItem } = this.props;
    if (!itemId) {
      return;
    }
    getItem(itemId)
      .then(this.onGetItem)
      .catch(this.onError);
  }

  onSrcError = (e) => {
    const alternativeSrc = 'https://350cr.blogs.brynmawr.edu/files/2013/05/anonymous.jpg';
    e.target.src = alternativeSrc;
  }


  render() {
    const { item, isLoading, isError, image } = this.state;

    if (!item && !isLoading) {
      return <span>Select a person from list</span>
    }

    if (isLoading) {
      return <Spinner/>
    }
    if (isError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="card item-details">
        <div className="row g-0">
          <div className="col-md-4">
            <img
            src={image}
            alt="item"
            onError={(e) => this.onSrcError(e)}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ item.name }</h5>
              <ul className="list-group list-group-flush">
                { React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { item });
                }) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
