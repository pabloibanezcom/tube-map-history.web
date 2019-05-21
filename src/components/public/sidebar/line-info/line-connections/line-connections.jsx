import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const lineConnections = (props) => {

  const { line, onStationSelected } = props;

  const drawStation = (connectionId, station, year, lastItem) => {
    return (
      <li key={connectionId} className={`stations-path-item ${lastItem ? 'last-item' : ''}`}>
        <div className="stations-path-year left">{year}</div>
        <div className="station-path-track left" style={{ borderLeftColor: line.colour }}>
          {station.markerIcon !== 'multiple' ?
            <i className="station-path-track-bar" style={{ backgroundColor: line.colour }} /> : null
          }
        </div>
        {station.markerIcon === 'multiple' ?
          <div className="station-path-circle left" style={{ backgroundColor: line.colour }} /> :
          null
        }
        <div className="stations-path-name left" onClick={() => onStationSelected(station)}><div>{station.name}</div></div>
        <div className="clearfix" />
      </li>
    )
  }

  return (
    <div className="line-connections">
      <div className="connections-header">Stations</div>
      <Scrollbars autoHeight autoHeightMin={200} autoHeightMax={400}>
        <div className="stations-container">
          <ul className="stations-path">
            {line.connections.map(c => {
              return drawStation(c._id, c.stations[0], c.year);
            })}
            {drawStation(0, line.connections[line.connections.length - 1].stations[1],
              line.connections[line.connections.length - 1].year, true)}
          </ul>
        </div>
      </Scrollbars>
    </div>
  );
};

export default lineConnections;