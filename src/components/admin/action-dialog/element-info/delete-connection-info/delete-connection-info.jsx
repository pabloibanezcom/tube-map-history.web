import tubeLogo from 'assets/img/icons/tube_alt.png';
import React from 'react';

const deleteConnectionInfo = (props) => {
  const { element } = props;
  const style = {
    backgroundColor: element.line.colour,
    color: element.line.fontColour
  };
  return (
    <div className="delete-connection-info">
      <div className="connection-station-name left"><img alt="" src={tubeLogo} />{element.stations[0].name}</div>
      <div className="connection-station-name right"><img alt="" src={tubeLogo} />{element.stations[1].name}</div>
      <div
        className="connection-line"
        style={style}
      />
      <div className="clearfix" />
      <div className="connection-line-name">{element.line.name}</div>
    </div>
  )
}

export default deleteConnectionInfo;