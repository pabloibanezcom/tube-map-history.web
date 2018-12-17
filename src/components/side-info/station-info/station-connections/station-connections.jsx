import React from 'react';
// import tubeLogo from '../../../../assets/img/icons/tube_alt.png';
import { groupBy } from '../../../../shared/utility';

const stationConnections = (props) => {
  return <div className="station-connections">
    <div className="connections-header">Connections</div>
    <ul className="ms-timeline">
      {groupBy(props.connections, 'year', 'connections', true).map((yc, ycIdx) => {
        return yc.connections.map((c, cIdx) => {
          return <li key={cIdx} className={`ms-timeline-item ${cIdx === yc.connections.length - 1 ? 'last-item' : ''}`}
            onClick={() => props.onStationSelected(c.stations[0])}>
            <div className="ms-timeline-date">
              <time className="timeline-time">{!cIdx ? yc.year : null}
              </time>
              <i className="ms-timeline-point" style={{ top: `${5}px`, backgroundColor: c.line.colour }}></i>
            </div>
            <div className="ms-timeline-station-name">
              {c.stations[0].name}
            </div>
          </li>
        })


      })}
    </ul>
  </div>
}

export default stationConnections;