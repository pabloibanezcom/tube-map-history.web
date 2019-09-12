import { LineSelector, StationSelector } from 'components/shared';
import React, { useState } from 'react';

const ConnectionsFilter = ({ draftId, onChangeParams }) => {

  const [currentFilter, setCurrentFilter] = useState('');

  const changeFilter = (param) => {
    const filter = Object.assign({}, currentFilter, param);
    setCurrentFilter(filter);
    onChangeParams({ filter });
  }

  const handleLineChange = (line) => {
    changeFilter({ line: line._id })
  }

  const handleStationChange = (station) => {
    changeFilter({ station: station._id })
  }

  return (
    <div className="connections-filter-basic flex flex-column">
      <div className="flex flex-row">
        <LineSelector
          draftId={draftId}
          className="w-180"
          onChange={handleLineChange}
          allLinesOpt
        />
        <StationSelector
          draftId={draftId}
          className="w-180 ml-15"
          onChange={handleStationChange}
        />
      </div>
    </div>
  )
}

export default ConnectionsFilter;