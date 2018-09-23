import React from 'react';

const selectedLine = (props) => {
  const style = props.selectedOption ? {
    borderLeft: `5px solid ${props.selectedOption.colour}`
  } : null;
  return <div className="filter-option" style={style}>
    <div className="filter-option-inner">
      <div className="filter-option-inner-inner">
        {props.selectedOption ? props.selectedOption.name : 'Select a line'}
      </div>
    </div>
  </div>
}

export default selectedLine