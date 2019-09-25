import React from 'react';
import TownInfoCard from './town-info-card/town-info-card';

const buildTownInfoElements = townInfo => {
  return [
    {
      label: 'Open year',
      value: townInfo.year,
      counterStart: 2019,
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
};

const townInfo = props => {
  const { sideBarState, info } = props;
  return (
    <div className="town-info">
      {info && sideBarState.open ? (
        <div>
          <div className="town-header">
            <div className="town-name">{info.name}</div>
            <div className="town-country">{info.country}</div>
          </div>
          <hr />
          <div className="town-basic-info mt-20">
            <div className="row">
              {buildTownInfoElements(info).map(ciEl => (
                <div key={ciEl.label} className="col-lg-6 mt-20">
                  <TownInfoCard
                    infoElement={ciEl}
                    initiate={props.sideBarState.initiate}
                    onModeSelected={props.onModeSelected}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default townInfo;
