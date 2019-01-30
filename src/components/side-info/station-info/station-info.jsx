import React from 'react';
import TownLogo from '../../towns/town-logo/town-logo';
import StationConnections from './station-connections/station-connections';

const stationInfo = (props) => {
  return <div className="station-info">
    <div className="station-name"><TownLogo town={props.town} />{props.station.name}</div>
    <div className="station-year">
      <div className="station-year-label">Year</div>
      <div className="float-right">
        <div className="station-year-value">{props.station.year}</div>
        <div className="station-year-rating">27th oldest of 359</div>
      </div>
    </div>
    <StationConnections
      connections={props.station.connections}
      onStationSelected={props.onStationSelected}
    />
  </div>
}

export default stationInfo;