import React from 'react';

const buttonGroup = (props) => {
  const { options, size } = props;
  return (
    <div className="button-group btn-group" role="group" aria-label="Basic example">
      {options.map(opt =>
        <button
          key={opt.label}
          type="button"
          onClick={() => opt.action(opt)}
          className={`btn ${opt.active ? 'btn-raised' : ''} ${size ? `btn-${size}` : ''} btn-primary`}
        >
          {opt.label}
        </button>)}
    </div>
  )
}

export default buttonGroup;