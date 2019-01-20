import React from 'react';

const selectedPlaceSuggestion = (props) => {
  return <div className="filter-option" >
    <div className="filter-option-inner">
      <div className="filter-option-inner-inner">
        {props.selectedOption ? props.selectedOption.name : 'Type a place'}
      </div>
    </div>
  </div>
}

export default selectedPlaceSuggestion