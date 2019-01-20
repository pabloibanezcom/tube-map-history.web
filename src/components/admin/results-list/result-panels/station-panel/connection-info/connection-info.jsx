import React from 'react';
import TownLogo from '../../../../../towns/town-logo/town-logo';

const connectionInfo = (props) => {
  const style = {
    backgroundColor: props.connection.line.colour,
    color: props.connection.line.fontColour
  }
  return <div className="connection-info">
    <div className={`connection-station-name ${props.position}`}>
      <TownLogo town={props.town} />
      {props.connection.stations.find(s => s._id !== props.stationId).name}
    </div>
    <div className="connection-line" style={style}></div>
    <div className="clearfix"></div>
    <div className="connection-line-name">{props.connection.line.name}</div>
    <div className={`connection-buttons ${props.position}`}>
      <button type="button" className="btn btn-xs btn-raised btn-secondary">Edit</button>
      <button type="button" className="btn btn-xs btn-danger" onClick={() => props.onShowDialog('DELETE_CONNECTION', props.connection)}>Delete</button>
    </div>
    <div className="clearfix"></div>
  </div>
}


export default connectionInfo;