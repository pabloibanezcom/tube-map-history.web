import { TownLogo } from 'components/shared';
import React from 'react';

const stationSelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="selected-station filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ?
            <div>
              {selectedOption.draft && selectedOption.draft.town ? <TownLogo townUrl={selectedOption.draft.town.url} /> : null}
              <span className="station-name">{selectedOption.name}</span>
            </div>
            : 'Select a station'}
        </div>
      </div>
    </div>
  )
}

export default stationSelected;