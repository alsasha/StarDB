import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      isError: false,
      isLoading: true
    }

    onError = () => {
      this.setState({
        isError: true,
        isLoading: false,
      })
    }

    componentDidMount() {
      this.props.getList()
        .then(data => {
          this.setState({
            data,
            isLoading: false
          })
        })
        .catch(this.onError)
    }

    render() {
      const { data, isError, isLoading } = this.state;

      if (!data && isLoading) {
        return <Spinner/>;
      }

      if (!data && isError) {
        return <ErrorIndicator/>;
      }

      return <View {...this.props} list={data}/>
    }
  }
}


export default withData;