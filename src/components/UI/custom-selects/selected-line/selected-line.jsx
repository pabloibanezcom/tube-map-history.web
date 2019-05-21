import React from 'react';

const selectedLine = (props) => {
  const { selectedOption } = props;
  const style = selectedOption ? {
    borderLeft: `5px solid ${selectedOption.colour}`
  } : null;
  return (
    <div className="filter-option" style={style}>
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ? selectedOption.name : 'Select a line'}
        </div>
      </div>
    </div>
  )
}

export default selectedLine