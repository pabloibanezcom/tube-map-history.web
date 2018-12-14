import React from 'react';
import CityInfoCard from './city-info-card/city-info-card';

const buildCityInfoElements = (cityInfo) => {
  return [
    {
      label: 'Years',
      value: cityInfo.years,
      icon: 'calendar-alt',
      mode: 'years'
    },
    {
      label: 'Lines',
      value: cityInfo.lines,
      icon: 'route',
      mode: 'lines'
    },
    {
      label: 'Stations',
      value: cityInfo.stations,
      icon: 'subway',
      mode: 'stations'

    },
    {
      label: 'Connections',
      value: cityInfo.connections,
      icon: 'exchange-alt',
      mode: 'connections'
    }
  ];
}

const cityInfo = (props) => {
  return <div className="city-info">
    <div className="city-header">
      <div className="city-name">London</div>
      <div className="city-country">United Kingdom</div>
    </div>
    <hr />
    <div className="city-basic-info mt-20">
      <div className="row">
        {buildCityInfoElements(props.cityInfo).map(ciEl =>
          <div key={ciEl.label} className="col-lg-6 mt-20">
            <CityInfoCard
              infoElement={ciEl}
              onModeSelected={props.onModeSelected}
            />
          </div>
        )}
      </div>
    </div>

  </div>
}

export default cityInfo;