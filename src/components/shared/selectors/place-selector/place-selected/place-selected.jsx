import React from 'react';

const placeSelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ? selectedOption.name : 'Type a place'}
        </div>
      </div>
    </div>
  )
}

export default placeSelected;