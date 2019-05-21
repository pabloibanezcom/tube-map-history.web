import React from 'react';
import { BarLoader } from 'react-spinners';

const loadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="ls-background" />
      <div className="ls-spinner">
        <BarLoader loading />
      </div>
    </div>
  )
}

export default loadingSpinner;