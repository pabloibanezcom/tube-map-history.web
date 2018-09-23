import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ConnectionInfo from './connection-info/connection-info';

const stationPanel = (props) => {
  return <div className="station-panel">
    <div className="row">
      <div className="col-lg-6">
        <div className="station-name">{props.station.name}</div>
        <div className="station-element station-year">
          <span className="station-element-label"><FontAwesomeIcon icon={'calendar-alt'} />Year:</span>
          <span className="station-element-value">{props.station.year}</span>
        </div>
        {props.station.geometry.coordinates ?
          <div className="station-element station-coordenates">
            <span className="station-element-label"><FontAwesomeIcon icon={'map-marker-alt'} />Coordenates:</span>
            <span className="station-element-value">{props.station.geometry.coordinates[0]} N  {props.station.geometry.coordinates[1]} W</span>
          </div>
          : null}
        <div className="station-element station-farezones">
          <span className="station-element-label"><FontAwesomeIcon icon={'coins'} />Farezones:</span>
          <span className="station-element-value">2 & 3</span>
        </div>
        <div className="station-buttons">
          <button type="button" className="btn btn-raised btn-secondary" onClick={() => props.onEditStation(props.station)}>Edit<div className="ripple-container"></div></button>
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="connections">
          <div className="connections-header"><FontAwesomeIcon icon={'exchange-alt'} />Connections</div>
          <div>
            {props.station.connections && props.station.connections.map((con, i) => {
              return <ConnectionInfo key={i}
                stationId={props.station._id}
                connection={con} />
            })}
          </div>
          <div className="connections-buttons">
            <button type="button" className="btn btn-raised btn-secondary" onClick={() => props.onAddConnection(props.station)}>Add connection<div className="ripple-container"></div></button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default stationPanel;
