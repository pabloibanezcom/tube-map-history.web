import tubeLogo from 'assets/img/icons/tube_alt.png';
import React from 'react';

const deleteConnectionInfo = (props) => {
  const style = {
    backgroundColor: props.element.line.colour,
    color: props.element.line.fontColour
  };
  return <div className="delete-connection-info">
    <div className="connection-station-name left"><img alt="" src={tubeLogo} />{props.element.stations[0].name}</div>
    <div className="connection-station-name right"><img alt="" src={tubeLogo} />{props.element.stations[1].name}</div>
    <div className="connection-line" style={style}></div>
    <div className="clearfix"></div>
    <div className="connection-line-name">{props.element.line.name}</div>
  </div>
}

export default deleteConnectionInfo;