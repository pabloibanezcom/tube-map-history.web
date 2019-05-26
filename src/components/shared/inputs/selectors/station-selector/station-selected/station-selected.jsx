import { Badge } from 'components/shared';
import React from 'react';

const stationSelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="selected-station filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ?
            <div><span className="station-name">{selectedOption.name}</span>
              {selectedOption.year ? (
                <Badge
                  text={selectedOption.year.toString()}
                  color="primary"
                  extraClass="ml-15"
                />
              ) : null}
            </div>
            : 'Select a station'}
        </div>
      </div>
    </div>
  )
}

export default stationSelected;