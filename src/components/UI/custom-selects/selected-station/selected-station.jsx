import React from 'react';

const selectedStation = (props) => {
  return <div className="selected-station filter-option">
    <div className="filter-option-inner">
      <div className="filter-option-inner-inner">
        {props.selectedOption ?
          <div><span className="station-name">{props.selectedOption.name}</span>
            {props.selectedOption.year ? <span className="station-year">{props.selectedOption.year}</span> : null}</div>
          : 'Select a station'}
      </div>
    </div>
  </div>
}

export default selectedStation