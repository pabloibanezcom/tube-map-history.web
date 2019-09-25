import React from 'react';

const overlay = props => {
  const { show } = props;
  return <div className={`overlay ${show ? 'shown' : ''}`} />;
};

export default overlay;
