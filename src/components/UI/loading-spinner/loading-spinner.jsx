import React from 'react';
import { BarLoader } from 'react-spinners';

const loadingSpinner = (props) => {
  return <div className="loading-spinner">
    <div className="ls-background"></div>
    <div className="ls-spinner">
      <BarLoader loading={true} />
    </div>
  </div>
}

export default loadingSpinner;