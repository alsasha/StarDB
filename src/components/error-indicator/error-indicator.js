import React from 'react';
import icon from './death-star.png';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator mt-3 mb-3">
      <img src={icon} alt="error-icon"></img>
      <div>Something went wrong...</div>
    </div>
  )
}

export default ErrorIndicator;