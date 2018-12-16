import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const lineConnections = (props) => {

  const drawStation = (connectionId, station, year, lastItem) => {
    return <li key={connectionId} className={`stations-path-item ${lastItem ? 'last-item' : ''}`}>
      <div className="stations-path-year left">{year}</div>
      <div className="station-path-track left" style={{ borderLeftColor: props.line.colour }}>
        {station.markerIcon !== 'multiple' ?
          <i className="station-path-track-bar" style={{ backgroundColor: props.line.colour }}></i> : null
        }
      </div>
      {station.markerIcon === 'multiple' ?
        <div className="station-path-circle left" style={{ backgroundColor: props.line.colour }}></div> :
        null
      }
      <div className="stations-path-name left" onClick={() => props.onStationSelected(station)}><div>{station.name}</div></div>
      <div className="clearfix"></div>
    </li>
  }

  return (
    <div className="line-connections">
      <div className="connections-header">Stations</div>
      <Scrollbars autoHeight autoHeightMin={200} autoHeightMax={400}>
        <div className="stations-container">
          <ul className="stations-path">
            {props.line.connections.map(c => {
              return drawStation(c._id, c.stations[0], c.year);
            })}
            {drawStation(0, props.line.connections[props.line.connections.length - 1].stations[1],
              props.line.connections[props.line.connections.length - 1].year, true)}
          </ul>
        </div>
      </Scrollbars>
    </div>
  );
};

export default lineConnections;