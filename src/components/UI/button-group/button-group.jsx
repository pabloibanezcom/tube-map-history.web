import React from 'react';

const buttonGroup = (props) => {
  return <div className="button-group btn-group" role="group" aria-label="Basic example">
    {props.options.map(opt =>
      <button key={opt.label} type="button" onClick={() => opt.action(opt)}
        className={`btn ${opt.active ? 'btn-raised' : ''} ${props.size ? 'btn-' + props.size : ''} btn-primary`}>
        {opt.label}
      </button>)}
  </div>
}

export default buttonGroup;