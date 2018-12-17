import React from 'react';

const overlay = (props) => {
  return <div className={`overlay ${props.show ? 'shown' : ''}`}></div>
}

export default overlay;