import React from 'react';

const button = (props) => {
  return <button type="submit"
    className={`btn btn-raised ${props.type ? `btn-${props.type}` : 'btn-primary'} btn-block`}
    style={props.style}>
    {props.text}
    <div className="ripple-container"></div>
  </button>
}

export default button