import React from 'react';

const connectionInfo = (props) => {
  const style = {
    backgroundColor: props.connection.line.colour,
    color: props.connection.line.fontColour
  }
  return <div className="connection-info" style={style}>{props.connection.stations.find(s => s._id !== props.stationId).name}</div>
}


export default connectionInfo;