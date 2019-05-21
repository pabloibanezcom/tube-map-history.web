import React from 'react';
// import tubeLogo from 'assets/img/icons/tube_alt.png';
import { groupBy } from 'shared/utility';

const stationConnections = (props) => {
  const { connections, onStationSelected } = props;
  return (
    <div className="station-connections">
      <div className="connections-header">Connections</div>
      <ul className="ms-timeline">
        {groupBy(connections, 'year', 'connections', true).map((yc) => {
          return yc.connections.map((c, cIdx) => {
            return (
              <li
                key={cIdx}
                className={`ms-timeline-item ${cIdx === yc.connections.length - 1 ? 'last-item' : ''}`}
                onClick={() => onStationSelected(c.stations[0])}
              >
                <div className="ms-timeline-date">
                  <time className="timeline-time">{!cIdx ? yc.year : null}
                  </time>
                  <i className="ms-timeline-point" style={{ top: `${5}px`, backgroundColor: c.line.colour }} />
                </div>
                <div className="ms-timeline-station-name">
                  {c.stations[0].name}
                </div>
              </li>
            )
          })
        })}
      </ul>
    </div>
  )
}

export default stationConnections;