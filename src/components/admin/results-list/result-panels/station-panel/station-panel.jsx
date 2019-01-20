import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ConnectionInfo from './connection-info/connection-info';

const stationPanel = (props) => {
  return <div className="station-panel">
    <div className="row">
      <div className="col-lg-6">
        <div className="station-name">{props.result.name}</div>
        <div className="station-element station-year">
          <span className="station-element-label"><FontAwesomeIcon icon={'calendar-alt'} />Year:</span>
          <span className="station-element-value">{props.result.year}</span>
        </div>
        {props.result.geometry.coordinates ?
          <div className="station-element station-coordenates">
            <span className="station-element-label"><FontAwesomeIcon icon={'map-marker-alt'} />Coordenates:</span>
            <span className="station-element-value">
              {Number.parseFloat(props.result.geometry.coordinates[0]).toFixed(4)}° N
              | {Number.parseFloat(props.result.geometry.coordinates[1]).toFixed(4)}° W
            </span>
          </div>
          : null}
        {/* <div className="station-element station-farezones">
          <span className="station-element-label"><FontAwesomeIcon icon={'coins'} />Farezones:</span>
          <span className="station-element-value">2 & 3</span>
        </div> */}
        <div className="station-buttons">
          <button type="button" className="btn btn-raised btn-secondary" onClick={() => props.onShowDialog('EDIT_STATION', props.result)}>Edit<div className="ripple-container"></div></button>
          <button type="button" className="btn btn-danger" onClick={() => props.onShowDialog('DELETE_STATION', props.result)}>Delete</button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="connections">
          <div className="connections-header"><FontAwesomeIcon icon={'exchange-alt'} />Connections</div>
          <div className="connections-list">
            {props.result.connections && props.result.connections.map((con, i) => {
              return <ConnectionInfo key={i}
                stationId={props.result._id}
                connection={con}
                town={props.town}
                position={con.stations[0]._id === props.result._id ? 'right' : 'left'}
                onShowDialog={props.onShowDialog} />
            })}
          </div>
          <div className="connections-buttons">
            <button type="button" className="btn btn-raised btn-secondary" onClick={() => props.onShowDialog('ADD_CONNECTION_TO_STATION', null, { stationFrom: props.result })}>Add connection<div className="ripple-container"></div></button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default stationPanel;
