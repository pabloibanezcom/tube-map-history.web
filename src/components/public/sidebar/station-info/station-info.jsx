import { TownLogo } from 'components/shared';
import React from 'react';
import StationConnections from './station-connections/station-connections';

const stationInfo = props => {
  const { onStationSelected, station, town } = props;
  return (
    <div className="station-info">
      <div className="station-name">
        <TownLogo town={town} />
        {station.name}
      </div>
      <div className="station-year">
        <div className="station-year-label">Year</div>
        <div className="float-right">
          <div className="station-year-value">{station.year}</div>
          <div className="station-year-rating">27th oldest of 359</div>
        </div>
      </div>
      <StationConnections connections={station.connections} onStationSelected={onStationSelected} />
    </div>
  );
};

export default stationInfo;
