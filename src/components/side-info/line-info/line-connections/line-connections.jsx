import React from 'react';

const lineConnections = (props) => {


  const drawStation = (connectionId, station, year, lastItem) => {
    return <li key={connectionId} className={`ms-timeline-item ${lastItem ? 'last-item' : ''}`}
      onClick={() => console.log(station)}>
      <div className="ms-timeline-date">
        <time className="timeline-time">{year}
        </time>
        {station.markerIcon === 'multiple' ?
          <i className="ms-timeline-point" style={{ top: `${5}px`, backgroundColor: props.line.colour }}></i> :
          <i className="ms-timeline-bar" style={{ backgroundColor: props.line.colour }}></i>
        }
      </div>
      <div className="ms-timeline-station-name">
        {station.name}
      </div>
    </li>
  }

  return (
    <div className="line-connections">
      <div className="connections-header">Stations</div>
      <div className="stations-container">
        <ul className="ms-timeline" style={{ borderLeftColor: props.line.colour }}>
          {props.line.connections.map(c => {
            return drawStation(c._id, c.stations[0], c.year);
          })}
          {drawStation(0, props.line.connections[props.line.connections.length - 1].stations[1],
            props.line.connections[props.line.connections.length - 1].year, true)}
        </ul>
      </div>
    </div>
  );
};

export default lineConnections;