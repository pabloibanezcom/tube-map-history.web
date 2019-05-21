import React from 'react';

const button = (props) => {
  const { style, text, type } = props;
  return (
    <button
      type="submit"
      className={`btn btn-raised ${type ? `btn-${type}` : 'btn-primary'} btn-block`}
      style={style}
    >
      {text}
      <div className="ripple-container" />
    </button>
  )
}

export default button