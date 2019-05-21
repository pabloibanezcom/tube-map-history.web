import React from 'react';
import TownLogo from '../../../../../towns/town-logo/town-logo';

const connectionInfo = (props) => {
  const { connection, position, town } = props;
  const style = {
    backgroundColor: connection.line.colour,
    color: connection.line.fontColour
  }
  return (
    <div className="connection-info">
      <div className={`connection-station-name ${position}`}>
        <TownLogo town={town} />
        {connection.stations.find(s => s._id !== props.stationId).name}
      </div>
      <div className="connection-line" style={style} />
      <div className="clearfix" />
      <div className="connection-line-name">{connection.line.name}</div>
      <div className={`connection-buttons ${position}`}>
        <button type="button" className="btn btn-xs btn-raised btn-secondary">Edit</button>
        <button type="button" className="btn btn-xs btn-danger" onClick={() => props.onShowDialog('DELETE_CONNECTION', props.connection)}>Delete</button>
      </div>
      <div className="clearfix" />
    </div>
  )
}


export default connectionInfo;