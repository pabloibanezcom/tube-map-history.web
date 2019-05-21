import React from 'react';

const selectedStation = (props) => {
  const { selectedOption } = props;
  return (
    <div className="selected-station filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ?
            <div><span className="station-name">{selectedOption.name}</span>
              {selectedOption.year ? <span className="station-year">{selectedOption.year}</span> : null}
            </div>
            : 'Select a station'}
        </div>
      </div>
    </div>
  )
}

export default selectedStation