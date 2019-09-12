import React from 'react';

const connectionsInfoHeader = ({ element }) => {
  return (
    <div className="lines-info-header" style={{ borderLeft: `10px solid ${element.line.colour}` }}>
      <span>{element.stations[0].name} - {element.stations[1].name}</span>
    </div>
  )
}

export default connectionsInfoHeader;