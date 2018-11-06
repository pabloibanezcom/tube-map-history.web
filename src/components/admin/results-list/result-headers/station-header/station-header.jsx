import React from 'react';
import tubeLogo from '../../../../../assets/img/icons/tube_alt.png';

const stationPanel = (props) => {

  return <div className="result-header station-header">
    <img alt="" src={tubeLogo} />
    <span className="name">{props.result.name}</span>
    <div className="extra-info-labels">
      {getUniqueLines(props.result.connections)
        .map(c => <span key={c._id} className="line-badge badge badge-default" style={{ backgroundColor: c.colour, color: c.fontColour }}>
          {c.name}</span>)}
    </div>
  </div>
}

const getUniqueLines = (connections) => {
  let uniqueLines = [];
  connections.map(c => {
    if (uniqueLines.find(l => l._id === c.line._id)) {
      return null;
    }
    uniqueLines.push(c.line);
    return null;
  })
  return uniqueLines;
}

export default stationPanel;