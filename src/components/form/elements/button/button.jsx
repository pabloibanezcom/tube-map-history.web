import React from 'react';

const button = (props) => {
  return <button type="submit" className="btn btn-raised btn-secondary btn-block" style={props.style}>
    {props.text}
    <div className="ripple-container"></div>
  </button>
}

export default button