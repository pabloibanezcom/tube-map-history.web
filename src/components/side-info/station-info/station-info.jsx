import React from 'react';
import tubeLogo from '../../../assets/img/icons/tube_alt.png';

const stationInfo = (props) => {
  return <div className="station-info">
    <div className="station-name"><img className="station-logo" alt="" src={tubeLogo} />{props.station.name} Station</div>
    <div className="station-year">
      <div className="station-year-label">Year</div>
      <div className="float-right">
        <div className="station-year-value">{props.station.year}</div>
        <div className="station-year-rating">27th oldest of 359</div>
      </div>
    </div>
  </div>
}

export default stationInfo;