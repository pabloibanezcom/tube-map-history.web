import React from 'react';
import TownInfoCard from './town-info-card/town-info-card';

const buildTownInfoElements = (townInfo) => {
  return [
    {
      label: 'Open year',
      value: townInfo.year,
      counterStart: 2018,
      icon: 'calendar-alt',
      mode: 'year'
    },
    {
      label: 'Lines',
      value: townInfo.linesAmount,
      icon: 'route',
      mode: 'lines'
    },
    {
      label: 'Stations',
      value: townInfo.stationsAmount,
      icon: 'subway',
      mode: 'stations'

    },
    {
      label: 'Connections',
      value: townInfo.connectionsAmount,
      icon: 'exchange-alt',
      mode: 'connections'
    }
  ];
}

const townInfo = (props) => {
  return <div className="town-info">
    {props.townInfo && props.sideBarState.open ?
      <div>
        <div className="town-header">
          <div className="town-name">{props.townInfo.name}</div>
          <div className="town-country">{props.townInfo.country}</div>
        </div>
        <hr />
        <div className="town-basic-info mt-20">
          <div className="row">
            {buildTownInfoElements(props.townInfo).map(ciEl =>
              <div key={ciEl.label} className="col-lg-6 mt-20">
                <TownInfoCard
                  infoElement={ciEl}
                  initiate={props.sideBarState.initiate}
                  onModeSelected={props.onModeSelected}
                />
              </div>
            )}
          </div>
        </div>
      </div> : null
    }
  </div>
}

export default townInfo;