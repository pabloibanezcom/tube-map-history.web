import React from 'react';
import TownLogo from '../../../../towns/town-logo/town-logo';

const stationPanel = (props) => {

  const { result, town } = props;

  return (
    <div className="result-header station-header">
      <TownLogo town={town} />
      <span className="name">{result.name}</span>
      <div className="extra-info-labels">
        {getUniqueLines(result.connections)
          .map(c => <span key={c._id} className="line-badge badge badge-default" style={{ backgroundColor: c.colour, color: c.fontColour }}>
            {c.name}</span>)}
      </div>
    </div>
  )
}

const getUniqueLines = (connections) => {
  const uniqueLines = [];
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